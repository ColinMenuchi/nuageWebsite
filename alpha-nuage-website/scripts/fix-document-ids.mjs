// One-time repair: the original migration used "." as a separator in
// deterministic document IDs (e.g. "game.chess"). Sanity treats any "." in
// a document _id as a signal to make that document private — readable only
// with an authenticated token — which is why the public (tokenless) site
// could never see any of this content. This recreates every affected
// document under a hyphenated id (e.g. "game-chess") and deletes the old
// dotted one, in an order that respects references (games are created
// before anything that references them is deleted). Safe to re-run.
//
// Usage:
//   node --env-file=.env.migration.local scripts/fix-document-ids.mjs

import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  console.error(
    'Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_API_WRITE_TOKEN.\n' +
      'Run with: node --env-file=.env.migration.local scripts/fix-document-ids.mjs',
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-01-01',
  token,
  useCdn: false,
})

function dotless(id) {
  return id.split('.').join('-')
}

function stripSystemFields(doc) {
  const {_id, _rev, _createdAt, _updatedAt, ...fields} = doc
  return fields
}

async function safeDelete(id) {
  try {
    await client.delete(id)
  } catch (err) {
    if (err?.statusCode === 404) return
    throw err
  }
}

async function main() {
  // Phase 1: create dotless copies of every "game" doc. Leave the old
  // dotted ones in place for now — eboardMember docs may still reference
  // them, and Sanity refuses to delete a document that's still referenced.
  const games = await client.fetch(`*[_type == "game"]`)
  console.log(`Found ${games.length} "game" documents.`)
  const gameIdMap = {}
  for (const doc of games) gameIdMap[doc._id] = dotless(doc._id)

  for (const [index, doc] of games.entries()) {
    const newId = gameIdMap[doc._id]
    if (newId === doc._id) continue
    console.log(`[game ${index + 1}/${games.length}] creating "${newId}"`)
    await client.createOrReplace({_id: newId, ...stripSystemFields(doc)})
  }

  // Phase 2: timelineEvent docs have no incoming references, safe to
  // create + delete in one pass.
  const events = await client.fetch(`*[_type == "timelineEvent"]`)
  console.log(`Found ${events.length} "timelineEvent" documents.`)
  for (const [index, doc] of events.entries()) {
    const newId = dotless(doc._id)
    if (newId === doc._id) continue
    console.log(`[event ${index + 1}/${events.length}] "${doc._id}" -> "${newId}"`)
    await client.createOrReplace({_id: newId, ...stripSystemFields(doc)})
    await safeDelete(doc._id)
  }

  // Phase 3: eboardMember docs — repoint favoriteGame at the new game id,
  // then create + delete.
  const members = await client.fetch(`*[_type == "eboardMember"]`)
  console.log(`Found ${members.length} "eboardMember" documents.`)
  for (const [index, doc] of members.entries()) {
    const newId = dotless(doc._id)
    const fields = stripSystemFields(doc)
    if (fields.favoriteGame?._ref && gameIdMap[fields.favoriteGame._ref]) {
      fields.favoriteGame = {...fields.favoriteGame, _ref: gameIdMap[fields.favoriteGame._ref]}
    }
    console.log(`[member ${index + 1}/${members.length}] "${doc._id}" -> "${newId}"`)
    await client.createOrReplace({_id: newId, ...fields})
    if (newId !== doc._id) await safeDelete(doc._id)
  }

  // Phase 4: nothing references the old dotted game docs anymore — safe
  // to delete them now.
  for (const [index, doc] of games.entries()) {
    const newId = gameIdMap[doc._id]
    if (newId === doc._id) continue
    console.log(`[game cleanup ${index + 1}/${games.length}] deleting "${doc._id}"`)
    await safeDelete(doc._id)
  }

  // Clean up the stray diagnostic document from earlier troubleshooting.
  const stray = await client.getDocument('test-doc-1')
  if (stray) {
    await safeDelete('test-doc-1')
    console.log('Deleted stray "test-doc-1" diagnostic document.')
  }

  console.log('\nDone. Verifying with an unauthenticated read...')
  const anonClient = createClient({projectId, dataset, apiVersion: '2026-01-01', useCdn: false})
  const counts = await anonClient.fetch(
    `{"game": count(*[_type=="game"]), "event": count(*[_type=="timelineEvent"]), "member": count(*[_type=="eboardMember"])}`,
  )
  console.log('Unauthenticated counts after fix:', counts)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

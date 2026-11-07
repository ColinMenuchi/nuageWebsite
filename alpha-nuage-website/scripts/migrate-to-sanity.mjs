// One-time migration: moves the hardcoded game/schedule/eboard data in src/
// into the Sanity dataset. Safe to re-run — anything already created (by
// deterministic _id) is skipped, including its image upload.
//
// Usage:
//   node --env-file=.env.migration.local scripts/migrate-to-sanity.mjs
//
// Requires SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_WRITE_TOKEN in the
// env file (see .env.migration.example).

import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import {fileURLToPath, pathToFileURL} from 'node:url'
import esbuild from 'esbuild'
import {createClient} from '@sanity/client'

const SRC_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src')
const IMAGE_EXT_RE = /\.(jpe?g|png|webp|avif|gif)$/i

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// esbuild plugin: resolves relative image imports (which only mean anything
// through Vite's bundler) to their absolute file-system path, so bundling
// GamesDB.jsx for plain Node gives us real paths instead of trying to parse
// binary image data as JS.
function imagePathPlugin() {
  return {
    name: 'image-path-plugin',
    setup(build) {
      build.onResolve({filter: IMAGE_EXT_RE}, (args) => ({
        path: path.resolve(args.resolveDir, args.path),
        namespace: 'image-path',
      }))
      build.onLoad({filter: /.*/, namespace: 'image-path'}, (args) => ({
        contents: `export default ${JSON.stringify(args.path)};`,
        loader: 'js',
      }))
    },
  }
}

async function bundleAndImportDefault(entryFile) {
  const result = await esbuild.build({
    entryPoints: [entryFile],
    bundle: true,
    format: 'esm',
    platform: 'node',
    write: false,
    plugins: [imagePathPlugin()],
    logLevel: 'silent',
  })
  const code = result.outputFiles[0].text
  const tmpFile = path.join(
    os.tmpdir(),
    `sanity-migrate-${Date.now()}-${Math.random().toString(36).slice(2)}.mjs`,
  )
  fs.writeFileSync(tmpFile, code)
  try {
    const mod = await import(pathToFileURL(tmpFile).href)
    return mod.default
  } finally {
    fs.unlinkSync(tmpFile)
  }
}

// --- Content that can't be auto-extracted (inline JSX, not a data array) ---
// Transcribed verbatim from src/components/About.jsx and src/components/Home.jsx.

const EBOARD_MEMBERS = [
  {
    name: 'Kimberly Tai',
    role: 'Club President and Forest Shuffle Shuffler',
    photo: 'eBoardPhotos/kimberlyTai.jpeg',
    bio:
      "Kimberly is a 3rd year at Northeastern studying Data Science & Business Administration! " +
      "A fun fact about her is that she knows way too much about our club's locker system. " +
      'Her keys are ordered "alphabetically" and to her it makes perfect sense.',
    favoriteGameTitle: 'Forest Shuffle',
  },
  {
    name: 'Oscar Adler',
    role: 'Club Vice President and Ark Nova Activist',
    photo: 'eBoardPhotos/oscarAdler.jpeg',
    bio:
      'Oscar is a 3rd year at Northeastern majoring in Chemical Engineering! ' +
      'A fun fact about him is he has a gold framed trichromatic portrait of a tiger that he made. ' +
      'His name is Roscoe.',
    favoriteGameTitle: 'Ark Nova',
  },
  {
    name: 'Colin Troan',
    role: 'Club Treasurer and Slay the Spire Silent',
    photo: 'eBoardPhotos/colinTroan.jpeg',
    bio:
      'Colin is a 2nd year at Northeastern studying Math & Economics! A fun fact about ' +
      'him is that he used to be an acrobat.',
    favoriteGameTitle: 'Slay the Spire',
  },
  {
    name: 'Matt Davis',
    role: 'Club Secretary and Spirit Island Inquirer',
    photo: 'eBoardPhotos/mattDavis.jpeg',
    bio:
      'Matt is a 2nd year at Northeastern studying Electrical & Computer Engineering! ' +
      'A fun fact he likes is that "Northeastern University is primarily renowned for its ' +
      'top-ranked experiential learning model, featuring a robust cooperative educa-..."',
    favoriteGameTitle: 'Spirit Island',
  },
  {
    name: 'Ellie Henderson',
    role: 'Club Game Master and Harmonies Heroine',
    photo: 'eBoardPhotos/ellieHenderson.jpeg',
    bio:
      'Ellie is a 2nd year at Northeastern studying Behavioral Neuroscience and Design! ' +
      "A fun fact she likes is that leaf cutter ants don't actually eat leaves!",
    favoriteGameTitle: 'Harmonies',
  },
  {
    name: 'Colin Menuchi',
    role: 'Club PR Director and Chess Crandmaster',
    photo: 'eBoardPhotos/colinMenuchi.jpeg',
    bio:
      'Colin is a 3rd year at Northeastern studying Computer Science! A fun fact he likes ' +
      'is that he built and now controls this website. Therefore, he can say whatever he wants here. ' +
      'Guys I’m gonna do it, I’m gonna say a cuss word. Here goes noth- oh hi Kimberly! What’s that? ' +
      'Uh huh, uh huh. Oh, um, ok. Sorry guys, never mind. \u{1F614}',
    favoriteGameTitle: 'Chess',
  },
]

const SITE_SETTINGS = {
  meetingSchedule: 'Fri & Sat at 7PM',
  location: 'Forsyth Building, Room 201',
  membershipNote: 'Free to Join',
  instagramStat: 'Over 1,000 Followers',
  discordStat: 'Over 1,400 Members',
}

// --- Sanity client ---

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  console.error(
    'Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_API_WRITE_TOKEN.\n' +
      'Run with: node --env-file=.env.migration.local scripts/migrate-to-sanity.mjs',
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

async function existingIdsOfType(type) {
  const ids = await client.fetch(`*[_type == $type]._id`, {type})
  return new Set(ids)
}

async function uploadImage(absolutePath) {
  const buffer = fs.readFileSync(absolutePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(absolutePath),
  })
  return {_type: 'image', asset: {_type: 'reference', _ref: asset._id}}
}

// --- Migration steps ---

async function migrateGames() {
  console.log('Bundling GamesDB.jsx for Node...')
  const games = await bundleAndImportDefault(path.join(SRC_DIR, 'GamesDB.jsx'))
  console.log(`Found ${games.length} games.`)

  const existing = await existingIdsOfType('game')
  const titleToId = {}

  for (const [index, game] of games.entries()) {
    const id = `game-${slugify(game.title)}`
    titleToId[game.title] = id

    if (existing.has(id)) {
      console.log(`[${index + 1}/${games.length}] Skipping "${game.title}" (already migrated)`)
      continue
    }

    console.log(`[${index + 1}/${games.length}] Uploading "${game.title}"...`)
    const coverImage = await uploadImage(game.imagePath)

    await client.createOrReplace({
      _id: id,
      _type: 'game',
      title: game.title,
      slug: {_type: 'slug', current: slugify(game.title)},
      coverImage,
      description: game.description,
      complexity: game.tags?.complexity,
      maxPlayers: game.tags?.players,
      genres: game.tags?.genres ?? [],
      storageLocker: game.tags?.storageLocker,
      storageLocationDetail: game.storageLocation,
    })
  }

  return titleToId
}

async function migrateTimelineEvents() {
  console.log('Bundling timelineEvents.jsx for Node...')
  const events = await bundleAndImportDefault(path.join(SRC_DIR, 'timelineEvents.jsx'))
  console.log(`Found ${events.length} timeline events.`)

  const existing = await existingIdsOfType('timelineEvent')

  for (const [index, event] of events.entries()) {
    const id = `timelineEvent-${index}`
    if (existing.has(id)) {
      console.log(`[${index + 1}/${events.length}] Skipping "${event.label}" (already migrated)`)
      continue
    }
    console.log(`[${index + 1}/${events.length}] Creating "${event.label}"...`)
    await client.createOrReplace({
      _id: id,
      _type: 'timelineEvent',
      date: event.date,
      label: event.label,
      description: event.description,
      order: index,
    })
  }
}

async function migrateEboardMembers(titleToId) {
  console.log(`Migrating ${EBOARD_MEMBERS.length} eBoard members...`)
  const existing = await existingIdsOfType('eboardMember')

  for (const [index, member] of EBOARD_MEMBERS.entries()) {
    const id = `eboardMember-${slugify(member.name)}`
    if (existing.has(id)) {
      console.log(`[${index + 1}/${EBOARD_MEMBERS.length}] Skipping "${member.name}" (already migrated)`)
      continue
    }

    console.log(`[${index + 1}/${EBOARD_MEMBERS.length}] Uploading "${member.name}"...`)
    const photo = await uploadImage(path.join(SRC_DIR, 'assets', member.photo))
    const favoriteGameId = titleToId[member.favoriteGameTitle]
    if (!favoriteGameId) {
      console.warn(
        `  Warning: couldn't find a game titled "${member.favoriteGameTitle}" for ${member.name}`,
      )
    }

    await client.createOrReplace({
      _id: id,
      _type: 'eboardMember',
      name: member.name,
      role: member.role,
      photo,
      bio: member.bio,
      favoriteGame: favoriteGameId
        ? {_type: 'reference', _ref: favoriteGameId}
        : undefined,
      order: index,
    })
  }
}

async function migrateSiteSettings() {
  console.log('Creating Site Settings document...')
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    ...SITE_SETTINGS,
  })
}

async function main() {
  const titleToId = await migrateGames()
  await migrateTimelineEvents()
  await migrateEboardMembers(titleToId)
  await migrateSiteSettings()
  console.log('\nDone! Check the Studio to confirm everything looks right.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

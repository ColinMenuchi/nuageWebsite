// One-time migration: moves the Home page's club photo carousel and stats
// bar into Sanity. The stats bar becomes a freely editable array (add,
// remove, reorder, edit) instead of fixed fields. Safe to re-run.
//
// Usage:
//   node --env-file=.env.migration.local scripts/add-stats-and-photos.mjs

import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {createClient} from '@sanity/client'

const SRC_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src')

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET
const token = process.env.SANITY_API_WRITE_TOKEN

if (!projectId || !dataset || !token) {
  console.error(
    'Missing SANITY_PROJECT_ID, SANITY_DATASET, or SANITY_API_WRITE_TOKEN.\n' +
      'Run with: node --env-file=.env.migration.local scripts/add-stats-and-photos.mjs',
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

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Transcribed verbatim from src/components/Home.jsx.
const CLUB_PHOTOS = [
  {file: 'botc.jpeg', alt: 'BOTC1'},
  {file: 'botc2.jpeg', alt: 'BOTC2'},
  {file: 'cards.jpeg', alt: 'Cards'},
  {file: 'catan.jpeg', alt: 'Catan'},
  {file: 'codenames.jpeg', alt: 'Codenames'},
  {file: 'coup.jpeg', alt: 'Coup'},
  {file: 'dominion.jpeg', alt: 'Dominion'},
  {file: 'drivingFatalities.jpeg', alt: 'Rare Photo'},
  {file: 'everdell.jpeg', alt: "Megan's Favorite Game"},
  {file: 'forestShuffle.jpeg', alt: 'Forest Shuffle'},
  {file: 'groupPhoto.jpeg', alt: 'Everyone'},
  {file: 'happy.jpeg', alt: 'YAY'},
  {file: 'house.jpeg', alt: 'More Mouse Bites'},
  {file: 'hutkin.jpeg', alt: 'Max'},
  {file: 'miku.jpeg', alt: 'Beam'},
  {file: 'mysterium.jpeg', alt: 'Mysterium'},
  {file: 'root.jpeg', alt: 'Root1'},
  {file: 'root2.jpeg', alt: 'Root2'},
  {file: 'slayTheSpire.jpeg', alt: 'StS1'},
  {file: 'slayTheSpire2.jpeg', alt: 'StS2'},
  {file: 'spiritIsland.jpeg', alt: 'Spirit Island'},
  {file: 'vast.jpeg', alt: 'Vast'},
]

async function uploadImage(absolutePath) {
  const buffer = fs.readFileSync(absolutePath)
  const asset = await client.assets.upload('image', buffer, {
    filename: path.basename(absolutePath),
  })
  return {_type: 'image', asset: {_type: 'reference', _ref: asset._id}}
}

async function migrateClubPhotos() {
  const existing = new Set(await client.fetch(`*[_type == "clubPhoto"]._id`))
  for (const [index, photo] of CLUB_PHOTOS.entries()) {
    const id = `clubPhoto-${slugify(photo.alt)}`
    if (existing.has(id)) {
      console.log(`[${index + 1}/${CLUB_PHOTOS.length}] Skipping "${photo.alt}" (already migrated)`)
      continue
    }
    console.log(`[${index + 1}/${CLUB_PHOTOS.length}] Uploading "${photo.alt}"...`)
    const image = await uploadImage(path.join(SRC_DIR, 'assets', 'clubPhotos', photo.file))
    await client.createOrReplace({_id: id, _type: 'clubPhoto', image, alt: photo.alt})
  }
}

async function migrateStats() {
  console.log('Migrating stats bar to an editable array...')
  const current = (await client.getDocument('siteSettings')) ?? {}
  const stats = [
    {_key: 'gameNights', icon: '📅', label: 'Game Nights', value: current.meetingSchedule ?? 'Fri & Sat at 7PM'},
    {_key: 'location', icon: '📍', label: 'Location', value: current.location ?? 'Forsyth Building, Room 201'},
    {_key: 'membership', icon: '🎉', label: 'Membership', value: current.membershipNote ?? 'Free to Join'},
    {_key: 'instagram', icon: '📷', label: 'Instagram', value: current.instagramStat ?? 'Over 1,000 Followers'},
    {_key: 'discord', icon: '🎮', label: 'Discord', value: current.discordStat ?? 'Over 1,400 Members'},
    {_key: 'johnCompany', icon: '📈', label: '(We Own This Game Now!)', value: 'John Company'},
  ]
  await client.createOrReplace({_id: 'siteSettings', _type: 'siteSettings', stats})
  console.log('Done.')
}

async function main() {
  await migrateClubPhotos()
  await migrateStats()

  console.log('\nVerifying with an unauthenticated read...')
  const anonClient = createClient({projectId, dataset, apiVersion: '2026-01-01', useCdn: false})
  const photoCount = await anonClient.fetch(`count(*[_type=="clubPhoto"])`)
  const settings = await anonClient.fetch(`*[_type=="siteSettings"][0]`)
  console.log('clubPhoto count:', photoCount)
  console.log('siteSettings:', JSON.stringify(settings, null, 2))
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

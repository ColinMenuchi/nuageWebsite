import {sanityClient} from './sanityClient'
import {urlFor} from './imageUrl'

const GAME_PROJECTION = `{
  title,
  description,
  storageLocationDetail,
  complexity,
  maxPlayers,
  genres,
  storageLocker,
  coverImage
}`

function mapGame(doc) {
  if (!doc) return null
  return {
    title: doc.title,
    description: doc.description,
    storageLocation: doc.storageLocationDetail,
    imagePath: doc.coverImage ? urlFor(doc.coverImage).width(600).url() : undefined,
    tags: {
      storageLocker: doc.storageLocker,
      complexity: doc.complexity,
      players: doc.maxPlayers,
      genres: doc.genres || [],
    },
  }
}

export async function fetchGames() {
  const docs = await sanityClient.fetch(`*[_type == "game"] | order(title asc) ${GAME_PROJECTION}`)
  return docs.map(mapGame)
}

export async function fetchTimelineEvents() {
  return sanityClient.fetch(
    `*[_type == "timelineEvent"] | order(order asc){ date, label, description }`,
  )
}

export async function fetchEboardMembers() {
  const docs = await sanityClient.fetch(
    `*[_type == "eboardMember"] | order(order asc){
      name,
      role,
      bio,
      photo,
      favoriteGame->${GAME_PROJECTION}
    }`,
  )
  return docs.map((doc) => ({
    imagePath: doc.photo ? urlFor(doc.photo).width(400).url() : undefined,
    title: doc.name,
    cardText: doc.role,
    popUpText: doc.bio,
    favoriteGame: mapGame(doc.favoriteGame),
  }))
}

export async function fetchSiteSettings() {
  return sanityClient.fetch(
    `*[_type == "siteSettings"][0]{ meetingSchedule, location, membershipNote, instagramStat, discordStat }`,
  )
}

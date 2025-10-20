import botc from "./assets/gamePhotos/botc.webp";
import cosmicEncounter from "./assets/gamePhotos/cosmicEncounter.jpeg";
import forestShuffle from "./assets/gamePhotos/forestShuffle.webp";
import fromage from "./assets/gamePhotos/fromage.jpeg";
import paranormalDetectives from "./assets/gamePhotos/paranormalDetectives.jpeg";
import slayTheSpire from "./assets/gamePhotos/slayTheSpire.jpeg";
import spiritIsland from "./assets/gamePhotos/spiritIsland.webp";
import stardewValley from "./assets/gamePhotos/stardewValley.jpeg";
import suburbia from "./assets/gamePhotos/suburbia.jpeg";
import takenoko from "./assets/gamePhotos/takenoko.jpeg";
import terraformingMars from "./assets/gamePhotos/terraformingMars.jpeg";
import terraformingMarsAresExpedition from "./assets/gamePhotos/terraformingMarsAresExpedition.jpeg";
import terraformingMarsColonies from "./assets/gamePhotos/terraformingMarsColonies.jpeg";
import terrorInMeepleCity from "./assets/gamePhotos/terrorInMeepleCity.webp";
import ticketToRide from "./assets/gamePhotos/ticketToRide.jpeg";
import ticketToRideUnitedKingdom from "./assets/gamePhotos/ticketToRideUnitedKingdom.webp";
import tigrisAndEuphrates from "./assets/gamePhotos/tigrisAndEuphrates.jpeg";
import trains from "./assets/gamePhotos/trains.jpeg";
import trickerion from "./assets/gamePhotos/trickerion.jpeg";
import tzokin from "./assets/gamePhotos/tzokin.webp"
import underwaterCities from "./assets/gamePhotos/underwaterCities.jpeg";
import underwaterCitiesNewDiscoveries from "./assets/gamePhotos/underwaterCitiesNewDiscoveries.jpeg";
import unfair from "./assets/gamePhotos/unfair.jpeg";
import villainous from "./assets/gamePhotos/villainous.jpeg";
import wastlandExpress from "./assets/gamePhotos/wastelandExpress.jpeg";
import wingspan from "./assets/gamePhotos/wingspan.jpeg";
import wingspanAisa from "./assets/gamePhotos/wingspanAsia.webp";
import jenga from "./assets/gamePhotos/jenga.jpeg";
import santorini from "./assets/gamePhotos/santorini.jpeg";
import spiritIslandFeatherAndFlame from "./assets/gamePhotos/spiritIslandFeatherAndFlame.webp"
import subdivision from "./assets/gamePhotos/subdivision.webp"
import timeStories from "./assets/gamePhotos/timeStories.jpeg"
import twilightImperiumRex from "./assets/gamePhotos/twilightImperiumRex.webp"
import dominion from "./assets/gamePhotos/dominion.webp"
import dominionAllies from "./assets/gamePhotos/dominionAllies.jpeg"
import dominionDarkAges from "./assets/gamePhotos/dominionDarkAges.jpeg"
import dominionSeaside from "./assets/gamePhotos/dominionSeaside.webp"



{/* Check which Fallout game we have. Goes in Top Shelf Locker B */}


const games_database = [
    { 
        imagePath: "./src/assets/gamePhotos/botc.webp",
        title: "Blood on the Clocktower", 
        description: "TBA",
        storageLocation: "3rd Shelf Locker G-Right",
    },
    { 
        imagePath: "./src/assets/gamePhotos/cosmicEncounter.jpeg", 
        title: "Cosmic Encounter", 
        description: "TBA",
        storageLocation: "Bottom Shelf Locker G-Left",
    },
    {
        imagePath: "./src/assets/gamePhotos/dominion.webp",
        title: "Dominion",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F"
    },
    {
        imagePath: "./src/assets/gamePhotos/dominionAllies.jpeg",
        title: "Dominion: Allies",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F"
    },
    {
        imagePath: "./src/assets/gamePhotos/dominionDarkAges.jpeg",
        title: "Dominion: Dark Ages",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F"
    },
    {
        imagePath: "./src/assets/gamePhotos/dominionSeaside.webp",
        title: "Dominion: Seaside",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F"
    },
    { 
        imagePath: "./src/assets/gamePhotos/forestShuffle.webp", 
        title: "Forest Shuffle", 
        description: "TBA",
        storageLocation: "Drawers Locker G-Right",
    },
    { 
        imagePath: "./src/assets/gamePhotos/fromage.jpeg",
        title: "Fromage", 
        description: "TBA",
        storageLocation: "Top Shelf Locker B",
    },
    {
        imagePath: "./src/assets/gamePhotos/jenga.jpeg",
        title: "Jenga",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/paranormalDetectives.jpeg",
        title: "Paranormal Detectives",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/santorini.jpeg",
        title: "Santorini",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F",
    },
    { 
        imagePath: "./src/assets/gamePhotos/slayTheSpire.jpeg", 
        title: "Slay the Spire", 
        description: "TBA",
        storageLocation: "3rd Shelf Locker B",
    },
    { 
        imagePath: "./src/assets/gamePhotos/spiritIsland.webp",
        title: "Spirit Island", 
        description: "TBA",
        storageLocation: "3rd Shelf Locker B",
    },
    {
        imagePath: "./src/assets/gamePhotos/spiritIslandFeatherAndFlame.webp",
        title: "Spirit Island: Feather and Flame",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/stardewValley.jpeg",
        title: "Stardew Valley",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/subdivision.webp",
        title: "Subdivision",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/suburbia.jpeg",
        title: "Suburbia",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/takenoko.jpeg",
        title: "Takenoko",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/terraformingMars.jpeg",
        title: "Terraforming Mars",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/terraformingMarsAresExpedition.jpeg",
        title: "Terraforming Mars: Ares Expedition",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/terraformingMarsColonies.jpeg",
        title: "Terraforming Mars: Colonies",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/terrorInMeepleCity.webp",
        title: "Terror in Meeplecity",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/ticketToRide.jpeg",
        title: "Ticket To Ride",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/ticketToRideUnitedKingdom.webp",
        title: "Ticket To Ride: United Kingdom",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/tigrisAndEuphrates.jpeg",
        title: "Tigris & Euphrates",
        description: "TBA",
        storageLocation: "Top Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/timeStories.jpeg",
        title: "Time Stories",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/trains.jpeg",
        title: "Trains",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/trickerion.jpeg",
        title: "Trickerion",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/spiritIslandFeatherAndFlame.webp",
        title: "Twilight Imperium Rex: Final Days of an Empire",
        description: "TBA",
        storageLocation: "Bottom Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/tzokin.webp",
        title: "Tzolk'In",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/underwaterCities.jpeg",
        title: "Underwater Cities",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/underwaterCitiesNewDiscoveries.jpeg",
        title: "Underwater Cities: New Discoveries",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/unfair.jpeg",
        title: "Unfair",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/villainous.jpeg",
        title: "Villainous",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/wastelandExpress.jpeg",
        title: "Wasteland Express",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/wingspan.jpeg",
        title: "Wingspan",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
    {
        imagePath: "./src/assets/gamePhotos/wingspanAsia.webp",
        title: "Wingspan: Asia",
        description: "TBA",
        storageLocation: "2nd Shelf Locker F",
    },
]

export default games_database;
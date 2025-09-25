import Card from "./Card.jsx"
import nuageBanner from "../assets/nuageBanner.jpg"
import botc from "../assets/botc.webp"
import cosmicEncounter from "../assets/cosmicEncounter.jpeg"
import forestShuffle from "../assets/forestShuffle.webp"
import fromage from "../assets/fromage.jpeg"
import slayTheSpire from "../assets/slayTheSpire.jpeg"
import spiritIsland from "../assets/spiritIsland.webp"

function Games() {

    return(
    <div>
        <h1 style={{
            marginLeft: "50px",
            marginTop: "30px",
            fontFamily: "papyrus",
        }}
        >
            Browse Our Game Collection:
        </h1>
        <Card image={botc} title="Blood on the Clocktower" text="Text About Them"></Card>
        <Card image={cosmicEncounter} title="Cosmic Encounter" text="Text About Them"></Card>
        <Card image={forestShuffle} title="Forest Shuffle" text="Text About Them"></Card>
        <Card image={fromage} title="Fromage" text="Text About Them"></Card>
        <Card image={slayTheSpire} title="Slay the Spire" text="Text About Them"></Card>
        <Card image={spiritIsland} title="Spirit Island" text="Text About Them"></Card>
    </div>);

}

export default Games;
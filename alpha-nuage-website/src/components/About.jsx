import Card from './Card.jsx'
import AboutPopUp from './AboutPopUp.jsx'

function About() {

    return(
    <div>
        <h1 style={{
            marginLeft: "50px",
            marginTop: "30px",
            fontFamily: "papyrus",
        }}
        >
            Meet Our Team:
        </h1>
        <AboutPopUp imagePath='./src/assets/eBoardPhotos/kimberlyTai.jpeg' title="Kimberly Tai" cardText="Club President and Forest Shuffle Enthusiast" popUpText="Idk man..... :/"></AboutPopUp>
        <AboutPopUp imagePath='./src/assets/eBoardPhotos/oscarAdler.jpeg' title="Oscar Adler" cardText="Club Vice President and Ark Nova Enjoyer" popUpText="Idk man..... :/"></AboutPopUp>
        <AboutPopUp imagePath='./src/assets/eBoardPhotos/colinTroan.jpeg' title="Colin Troan" cardText="Club Treasurer and Slay the Spire Fanatic" popUpText="Idk man..... :/"></AboutPopUp>
        <AboutPopUp imagePath='./src/assets/eBoardPhotos/mattDavis.jpeg' title="Matt Davis" cardText="Club Secretary and Spirit Island Addict" popUpText="Idk man..... :/"></AboutPopUp>
        <AboutPopUp imagePath='./src/assets/eBoardPhotos/ellieHenderson.jpeg' title="Ellie Henderson" cardText="Club Game Master and Harmonies Connoissuer" popUpText="Idk man..... :/"></AboutPopUp>
        <AboutPopUp imagePath='./src/assets/eBoardPhotos/colinMenuchi.jpeg' title="Colin Menuchi" cardText="Club PR Director and Chess Grandmaster" popUpText="Idk man..... :/"></AboutPopUp>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
    </div>
    );
}

export default About;
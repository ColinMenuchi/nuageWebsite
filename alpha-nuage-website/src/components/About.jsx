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
        <AboutPopUp imagePath='./src/assets/businessWoman.jpeg' title="Jane Doe" cardText="Club Secretary and Gravwell Enthusiast" popUpText="Idk man..... :/"></AboutPopUp>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
        <Card imagePath='./src/assets/nuageBanner.jpg' title="Leader's Name" text="Text About Them"></Card>
    </div>
    );
}

export default About;
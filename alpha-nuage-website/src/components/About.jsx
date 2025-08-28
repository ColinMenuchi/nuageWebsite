import nuageBanner from '../assets/nuageBanner.jpg'
import businessWoman from '../assets/businessWoman.jpeg'
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
        <AboutPopUp image={businessWoman} title="Jane Doe" text="Club Secretary and Gravwell Enthusiast"></AboutPopUp>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
    </div>
    );
}

export default About;
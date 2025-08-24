import nuageBanner from '../assets/nuageBanner.jpg'
import Card from './Card.jsx'

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
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
        <Card image={nuageBanner} title="Leader's Name" text="Text About Them"></Card>
    </div>
    );
}

export default About;
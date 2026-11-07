import { useEffect, useState } from "react"
import EBoardPopUp from "./EBoardPopUp.jsx"
import { fetchEboardMembers } from "../lib/content.js"
import "./About.css"
import twelvePlayerSpiritIsland from "../assets/twelvePlayerSpiritIsland.jpeg"

function About() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetchEboardMembers().then(setMembers);
    }, []);

    return(
    <div className="about-page">
        <h1 className="about-heading about-heading--centered">Our Story</h1>

        <div className="about-story">
            <p className="about-story-text">
                &lsquo;Twas a cold winter day when group of people gathered &lsquo;round the common tables
                of Stetson West to play Eclipse. During that fateful game, it was decided that a
                board game club was needed at Northeastern University. Those players declared that
                they would be the ones to start it. With haste they rushed to submit their club
                application but were a moment too late. They had missed the deadline but were
                determined to try the next semester, and through their determintation NUAGE was born
                in the fall of 2015.
            </p>
            <img
                src={twelvePlayerSpiritIsland}
                alt="NUAGE members playing Spirit Island"
                className="about-story-image"
            />
        </div>

        <p className="about-story-tagline">
            Now, the members of NUAGE gather &lsquo;round the tables of Forsyth 201 every Friday and
            Saturday from 7pm to 12am. Swing by and become part of the gang! Read on for information
            about our club&apos;s leaders!
        </p>

        <hr className="about-divider" />

        <h1 className="about-heading">Meet Our eBoard</h1>
        <div className="about-eboard-grid">
            {members.map((member) => (
                <EBoardPopUp key={member.title} {...member} />
            ))}
        </div>
    </div>
    );
}

export default About;

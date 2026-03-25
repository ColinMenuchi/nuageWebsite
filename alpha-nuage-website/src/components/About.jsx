import AboutPopUp from "./AboutPopUp.jsx"
import "./About.css"

function About() {

    const taiText = "Kimberly is a 3rd year at Northeastern studying Data Science & Business Administration! " +
                    "A fun fact about her is that she knows way too much about our club's locker system. " +
                    "Her keys are ordered \"alphabetically\" and to her it makes perfect sense."

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
                src="./src/assets/twelvePlayerSpiritIsland.jpeg"
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
            <AboutPopUp imagePath="./src/assets/eBoardPhotos/kimberlyTai.jpeg" title="Kimberly Tai" cardText="Club President and Forest Shuffle Enthusiast" popUpText={taiText} />
            <AboutPopUp imagePath="./src/assets/eBoardPhotos/oscarAdler.jpeg" title="Oscar Adler" cardText="Club Vice President and Ark Nova Enjoyer" popUpText="Idk man..... :/" />
            <AboutPopUp imagePath="./src/assets/eBoardPhotos/colinTroan.jpeg" title="Colin Troan" cardText="Club Treasurer and Slay the Spire Fanatic" popUpText="Idk man..... :/" />
            <AboutPopUp imagePath="./src/assets/eBoardPhotos/mattDavis.jpeg" title="Matt Davis" cardText="Club Secretary and Spirit Island Addict" popUpText="Idk man..... :/" />
            <AboutPopUp imagePath="./src/assets/eBoardPhotos/ellieHenderson.jpeg" title="Ellie Henderson" cardText="Club Game Master and Harmonies Connoissuer" popUpText="Idk man..... :/" />
            <AboutPopUp imagePath="./src/assets/eBoardPhotos/colinMenuchi.jpeg" title="Colin Menuchi" cardText="Club PR Director and Chess Grandmaster" popUpText="Idk man..... :/" />
        </div>
    </div>
    );
}

export default About;

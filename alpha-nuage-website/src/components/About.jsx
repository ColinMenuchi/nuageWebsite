import Card from './Card.jsx'
import AboutPopUp from './AboutPopUp.jsx'

function About() {

    const taiText = "Kimberly is a 3rd year at Northeastern studying Data Science & Business Administration! " +
                    "A fun fact about her is that she knows way too much about our club's locker system. " +
                    "Her keys are ordered \"alphabetically\" and to her it makes perfect sense."

    return(
    <div>
        <h1 style={{
            textAlign: "center",
            marginTop: "30px",
            fontFamily: "papyrus",
        }}>
            Our Story
        </h1>


        <div style={{ display: "flex", alignItems: "center", gap: "100px", marginLeft: "50px" }}>
            <h2 style={{
                textAlign: "left",
                marginLeft: "50px",
                fontFamily: "Comic Sans MS",
            }}>
                'Twas a cold winter day when group of people gathered ‘round the common tables
                of Stetson West to play Eclipse. During that fateful game, it was decided that a
                board game club was needed at Northeastern University. Those players declared that
                they would be the ones to start it. With haste they rushed to submit their club
                application but were a moment too late. They had missed the deadline but were
                determined to try the next semester, and through their determintation NUAGE was born
                in the fall of 2015.
            </h2>
            <img src="./src/assets/twelvePlayerSpiritIsland.jpeg" alt="Image Not Found."
            style={{ maxHeight: "400px", marginRight: "200px", borderRadius: "12px" }}></img>
        </div>


        <div style={{ display: "flex", alignItems: "center", gap: "100px", marginLeft: "50px" }}>
            <h2 style={{
                textAlign: "left",
                marginLeft: "50px",
                marginTop: "50px",
                fontFamily: "Comic Sans MS",
            }}>
                Now, the members of NUAGE gather 'round the tables of Forsyth 201 every Friday and
                Saturday from 7pm to 12am. Swing by and become part of the gang! Read on for information
                about our club's leaders!
            </h2>
        </div>


        <h1 style={{
            marginLeft: "50px",
            marginTop: "30px",
            fontFamily: "papyrus",
        }}
        >
            Meet Our eBoard:
        </h1>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", marginLeft: "100px "}}>
            <AboutPopUp imagePath='./src/assets/eBoardPhotos/kimberlyTai.jpeg' title="Kimberly Tai" cardText="Club President and Forest Shuffle Enthusiast" popUpText={taiText}></AboutPopUp>
            <AboutPopUp imagePath='./src/assets/eBoardPhotos/oscarAdler.jpeg' title="Oscar Adler" cardText="Club Vice President and Ark Nova Enjoyer" popUpText="Idk man..... :/"></AboutPopUp>
            <AboutPopUp imagePath='./src/assets/eBoardPhotos/colinTroan.jpeg' title="Colin Troan" cardText="Club Treasurer and Slay the Spire Fanatic" popUpText="Idk man..... :/"></AboutPopUp>
            <AboutPopUp imagePath='./src/assets/eBoardPhotos/mattDavis.jpeg' title="Matt Davis" cardText="Club Secretary and Spirit Island Addict" popUpText="Idk man..... :/"></AboutPopUp>
            <AboutPopUp imagePath='./src/assets/eBoardPhotos/ellieHenderson.jpeg' title="Ellie Henderson" cardText="Club Game Master and Harmonies Connoissuer" popUpText="Idk man..... :/"></AboutPopUp>
            <AboutPopUp imagePath='./src/assets/eBoardPhotos/colinMenuchi.jpeg' title="Colin Menuchi" cardText="Club PR Director and Chess Grandmaster" popUpText="Idk man..... :/"></AboutPopUp>
        </div>
    </div>
    );
}

export default About;
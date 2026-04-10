import EBoardPopUp from "./EBoardPopUp.jsx"
import games_database from "../GamesDB.jsx"
import "./About.css"
import twelvePlayerSpiritIsland from "../assets/twelvePlayerSpiritIsland.jpeg"
import kimberlyTai from "../assets/eBoardPhotos/kimberlyTai.jpeg"
import oscarAdler from "../assets/eBoardPhotos/oscarAdler.jpeg"
import colinTroan from "../assets/eBoardPhotos/colinTroan.jpeg"
import mattDavis from "../assets/eBoardPhotos/mattDavis.jpeg"
import ellieHenderson from "../assets/eBoardPhotos/ellieHenderson.jpeg"
import colinMenuchi from "../assets/eBoardPhotos/colinMenuchi.jpeg"

const findGame = (title) => games_database.find(g => g.title === title)

function About() {

    const taiText = "Kimberly is a 3rd year at Northeastern studying Data Science & Business Administration! " +
                    "A fun fact about her is that she knows way too much about our club's locker system. " +
                    "Her keys are ordered \"alphabetically\" and to her it makes perfect sense.";
    const adlerText = "Oscar is a 3rd year at Northeastern majoring in Chemical Engineering! " + 
                    "A fun fact about him is he has a gold framed trichromatic portrait of a tiger that he made. " +
                    "His name is Roscoe.";
    const davisText = "Matt is a 2nd year at Northeastern studying Electrical & Computer Engineering! " +
                    "A fun fact he likes is that \"Northeastern University is primarily renowned for its " +
                    "top-ranked experiential learning model, featuring a robust cooperative educa-...\"";
    const troanText = "Colin is a 2nd year at Northeastern studying Math & Economics! A fun fact about " +
                    "him is that he used to be an acrobat.";
    const hendersonText = "Ellie is a 2nd year at Northeastern studying Behavioral Neuroscience and Design! " +
                    "A fun fact she likes is that leaf cutter ants don't actually eat leaves!";
    const menuchiText = "Colin is a 3rd year at Northeastern studying Computer Science! A fun fact he likes " +
                    "is that he built and now controls this website. Therefore, he can say whatever he wants here. " +
                    "Guys I’m gonna do it, I’m gonna say a cuss word. Here goes noth- oh hi Kimberly! What’s that? " +
                    "Uh huh, uh huh. Oh, um, ok. Sorry guys, never mind. 😔"

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
            <EBoardPopUp imagePath={kimberlyTai} title="Kimberly Tai" cardText="Club President and Forest Shuffle Shuffler" popUpText={taiText} favoriteGame={findGame("Forest Shuffle")} />
            <EBoardPopUp imagePath={oscarAdler} title="Oscar Adler" cardText="Club Vice President and Ark Nova Activist" popUpText={adlerText} favoriteGame={findGame("Ark Nova")} />
            <EBoardPopUp imagePath={colinTroan} title="Colin Troan" cardText="Club Treasurer and Slay the Spire Silent" popUpText={troanText} favoriteGame={findGame("Slay the Spire")} />
            <EBoardPopUp imagePath={mattDavis} title="Matt Davis" cardText="Club Secretary and Spirit Island Inquirer" popUpText={davisText} favoriteGame={findGame("Spirit Island")} />
            <EBoardPopUp imagePath={ellieHenderson} title="Ellie Henderson" cardText="Club Game Master and Harmonies Heroine" popUpText={hendersonText} favoriteGame={findGame("Harmonies")} />
            <EBoardPopUp imagePath={colinMenuchi} title="Colin Menuchi" cardText="Club PR Director and Chess Crandmaster" popUpText={menuchiText} favoriteGame={findGame("Chess")} />
        </div>
    </div>
    );
}

export default About;

import { useState, useEffect } from "react";
import animeIsRealRight from "../../assets/hiddenFigures/animeIsRealRight.webp";

function AnimeIsRealRight() {

    const undyneText = <>NGAHHH! You found me you punk! You stood still and faced danger head on. That could have been really bad if you had to donate all your money to *holds back barf* {"BoArD GaMeS".split("").map((char, i) => (
        <span key={i} className="shake" style={{ animationDelay: `${i * 0.03}s` }}>{char === " " ? "\u00A0" : char}</span>
    ))}. Screenshot this page and send it to Colin (kreditkarma1 on discord) for your reward.</>;
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleMessage = (e) => {
            if (e.origin !== "https://open.spotify.com") return;
            const data = e.data;
            if (data.type === "playback_update" && !data.payload.isPaused) {
                setIsPlaying(true);
            }
        };
        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return(
        <div>
            <iframe
                src="https://open.spotify.com/embed/track/5Q2YHimqwRHoPifb3H8Nlo?si=ccf77c7c787b45ea"
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {!isPlaying && <p>Easter Egg 5/6. Play the Music!</p>}
            {isPlaying && <h2 style={{ fontFamily: "'Press Start 2P', monospace" }}>{undyneText}</h2>}
            <img src={animeIsRealRight} alt="But no one came." />
        </div>
    );
}

export default AnimeIsRealRight;
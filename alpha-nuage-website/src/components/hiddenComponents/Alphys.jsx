import { useState, useEffect } from "react";
import anime from "../../assets/hiddenFigures/anime.webp";

function Alphys() {
    const alphysText = "O-oh! You found me! I was just... doing important scientific research. It's not like I was watching anime or anything. Screenshot this page and send it to Colin (kreditkarma1 on discord) for a reward!";
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

    return (
        <div>
            <iframe
                src="https://open.spotify.com/embed/track/5Prf4wpKlnsqj9HTSW4BjW"
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {!isPlaying && <p>Easter Egg 1/6. Play the Music!</p>}
            {isPlaying && <h2 style={{ fontFamily: "'Press Start 2P', monospace" }}>{alphysText}</h2>}
            <img src={anime} alt="Alphys" />
        </div>
    );
}

export default Alphys;

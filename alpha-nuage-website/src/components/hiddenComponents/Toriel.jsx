import { useState, useEffect } from "react";
import butterscotch from "../../assets/hiddenFigures/butterscotch.png";

function Toriel() {
    const torielText = "Oh poor child, you have forgotten your way home. To get home, you press the button in the navigation bar silly! Well, since you're here, have some butterscotch pie as a reward! Screenshot this page and send it to Colin (kreditkarma1 on discord).";
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
                src="https://open.spotify.com/embed/track/2Rf33bpATyDiqTGm0NvlNb"
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {!isPlaying && <p>Easter Egg 4/6. Play the Music!</p>}
            {isPlaying && <h2 style={{ fontFamily: "papyrus" }}>{torielText}</h2>}
            <img src={butterscotch} alt="Toriel" />
        </div>
    );
}

export default Toriel;

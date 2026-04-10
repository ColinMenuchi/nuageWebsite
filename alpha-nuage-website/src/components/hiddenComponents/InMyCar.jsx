import { useState, useEffect } from "react";
import inMyCar from "../../assets/hiddenFigures/inMyCar.jpeg";
import outOfMyCar from "../../assets/hiddenFigures/outOfMyCar.webp";

function InMyCar() {
    const asgoreText = "I think I know where to get it. You can go ahead and screenshot this page now. Send it to Colin (kreditkarma1) on discord for a reward.";
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
                src="https://open.spotify.com/embed/track/7txouAZgjqHcIPQQTzojyv?si=036fc1b1909e46c7"
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {!isPlaying && <p>Easter Egg 6/6. Thanks for donating me 6 souls. Now I just need one more!</p>}
            {isPlaying && <h2 style={{ fontFamily: "'Press Start 2P', monospace" }}>{asgoreText}</h2>}
            <img src={isPlaying ? inMyCar : outOfMyCar} alt="Asgore" />
        </div>
    );
}

export default InMyCar;

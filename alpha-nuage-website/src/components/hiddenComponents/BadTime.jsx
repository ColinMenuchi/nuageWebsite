import { useState, useEffect } from "react";
import aBadTime from "../../assets/hiddenFigures/aBadTime.webp";

function BadTime() {

    const sansText = "It's a beautiful day outside. Birds are singing, flowers are blooming.... Hey, you did it kid! You managed to screenshot the page so you could read this! Because you did that, I'm gonna tell you how you can claim your reward! All you have to do is just screenshot this page and send it to Colin kid! Easy, right?";
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const handleMessage = (e) => {
            if (e.origin !== "https://open.spotify.com") return;
            const data = e.data;
            if (data.type === "playback_update" && !data.payload.isPaused) {
                setIsPlaying(true);
                setTimeout(() => {
                    window.location.href = "https://badtimesimulator.io";
                }, 1000);
            }
        };
        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return(
        <div>
            <iframe
                src="https://open.spotify.com/embed/track/26lWYpgbcknITI0Fy1eZDs?si=ff685ce948204e75"
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {!isPlaying && <p style={{ fontFamily: "comic-sans" }}>Easter Egg 3/6. Hey kid, if you continue down this route, you're gonna have a bad time.</p>}
            {isPlaying && <h2 style={{ fontFamily: "comic-sans" }}>{sansText}</h2>}
            <img src={aBadTime} alt="But no one came."/>
        </div>
    );
}

export default BadTime;
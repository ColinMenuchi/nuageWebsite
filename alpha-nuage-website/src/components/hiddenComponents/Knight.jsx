import { useState, useEffect } from "react";
import theRoaringKnight from "../../assets/hiddenFigures/theRoaringKnight.webp";

function Knight() {

    const papyrusText = "Nyeh Heh Heh! It is I, the great Papyrus! You have found me, which means you sucessfully completed my puzzle! As a reward, here is your prize: ______. I- I forgot- WHERE IS THE PRIZE? Ok, I may have misplaced the prize, but you can screenshot this page and send it to Colin (kreditkarma1 on discord) for it. I've got another puzzle idea and I can't wait to share it with my brother! Where was he? Um, I don't know. I'm going to have to go search for him!";
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
                src="https://open.spotify.com/embed/track/6YEGQH32aAXb9vQQbBrPlw?"
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
            {!isPlaying && <p>Easter Egg 2/6. The Roaring Knight?</p>}
            {isPlaying && <h2 style={{ fontFamily: "papyrus", textTransform: "uppercase" }}>{papyrusText}</h2>}
            <img src={theRoaringKnight} alt="But no one came." />
        </div>
    );
}

export default Knight;
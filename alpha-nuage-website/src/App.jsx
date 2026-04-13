import {useState, useEffect} from "react";
import NewTopMenu from "./components/NewTopMenu.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Games from './components/Games.jsx';
import Knight from './components/hiddenComponents/Knight.jsx';
import BadTime from './components/hiddenComponents/BadTime.jsx';
import AnimeIsRealRight from './components/hiddenComponents/animeIsRealRight.jsx';
import EasterEgg from './components/hiddenComponents/easterEgg.jsx';
import InMyCar from './components/hiddenComponents/InMyCar.jsx';
import Toriel from './components/hiddenComponents/Toriel.jsx';
import Alphys from './components/hiddenComponents/Alphys.jsx';

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

function App() {
  const [page, setPage] = useState("home"); // used to determine which page to display
  const [donateClicks, setDonateClicks] = useState(0);
  console.log("App is running")

  const handleNavigate = (newPage) => {
    if (newPage === "donate") {
      const newCount = donateClicks + 1;
      if (newCount >= 6) {
        setDonateClicks(0);
        setPage("inMyCar");
        return;
      }
      setDonateClicks(newCount);
    } else {
      setDonateClicks(0);
    }
    setPage(newPage);
  };

  useEffect(() => {
    if (page !== "donate") return;
    const timer = setTimeout(() => setPage("anime"), 60000);
    return () => clearTimeout(timer);
  }, [page]);

  useEffect(() => {
    let keys = [];
    const handleKey = (e) => {
      keys = [...keys, e.key].slice(-KONAMI.length);
      if (keys.join(",") === KONAMI.join(",")) {
        setPage("egg");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className={`page-${page}`}>
      <NewTopMenu onNavigate={handleNavigate} currentPage={page} />

      {page === "home" && <Home onNavigate={handleNavigate}></Home>}
      {page === "about" && <About></About>}
      {page === "games" && <Games onNavigate={setPage}></Games>}
      {page === "knight" && <Knight></Knight>}
      {page === "badtime" && <BadTime></BadTime>}
      {page === "donate" && <h1 style={{ marginTop: "100px" }}>This page is currently under construction. We know a lot of you are eager to donate to NUAGE, and we appreciate your patience as you wait for this page to be implemented.</h1>}
      {page === "anime" && <AnimeIsRealRight></AnimeIsRealRight>}
      {page === "egg" && <EasterEgg></EasterEgg>}
      {page === "inMyCar" && <InMyCar></InMyCar>}
      {page === "toriel" && <Toriel></Toriel>}
      {page === "alphys" && <Alphys></Alphys>}
      <footer style={{ textAlign: "center", padding: "20px", marginTop: "40px", fontSize: "14px", color: "gray" }}>
        © NUAGE 2026. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App

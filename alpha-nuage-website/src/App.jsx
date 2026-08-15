import {useState} from "react";
import NewTopMenu from "./components/NewTopMenu.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Games from './components/Games.jsx';

function App() {
  const [page, setPage] = useState("home"); // used to determine which page to display

  return (
    <div className={`page-${page}`}>
      <NewTopMenu onNavigate={setPage} currentPage={page} />

      {page === "home" && <Home onNavigate={setPage}></Home>}
      {page === "about" && <About></About>}
      {page === "games" && <Games></Games>}
      {page === "donate" && <h1 style={{ marginTop: "100px" }}>This page is currently under construction. We know a lot of you are eager to donate to NUAGE, and we appreciate your patience as you wait for this page to be implemented.</h1>}
      <footer style={{ textAlign: "center", padding: "20px", marginTop: "40px", fontSize: "14px", color: "gray" }}>
        © 2026 NUAGE. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App

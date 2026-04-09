import {useState} from "react";
import NewTopMenu from "./components/NewTopMenu.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Games from './components/Games.jsx';


function App() {
  const [page, setPage] = useState("home"); // used to determine which page to display
  console.log("App is running")
  return (
    <div className={`page-${page}`}>
      <NewTopMenu onNavigate={setPage} currentPage={page} />

      {page === "home" && <Home onNavigate={setPage}></Home>}
      {page === "about" && <About></About>}
      {page === "games" && <Games></Games>}
      {page === "donate" && <h1>But no one came.</h1>}
    </div>
  )
}

export default App

import {useState} from "react";
import TopMenu from "./components/TopMenu.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Games from './components/Games.jsx';


function App() {
  const [page, setPage] = useState("home"); // used to determine which page to display

  return (
    <div className={`page-${page}`}> 
      <TopMenu currentPage={page} onNavigate={setPage} />

      {page === "home" && <Home></Home>}
      {page === "about" && <About></About>}
      {page === "games" && <Games></Games>}
    </div>
  )
}

export default App

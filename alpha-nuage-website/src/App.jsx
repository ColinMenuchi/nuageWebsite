import {useState} from "react";
import TopMenu from "./components/TopMenu.jsx";
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

      {page === "home" && <Home></Home>}
      {page === "about" && <About></About>}
      {page === "games" && <Games></Games>}
    </div>
  )
}

export default App

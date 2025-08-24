import {useState} from "react";
import TopMenu from "./components/TopMenu.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx'


function App() {
  const [page, setPage] = useState("home"); // used to determine which page to display

  return (
    <div className={`page-${page}`}> 
      <TopMenu currentPage={page} onNavigate={setPage} />

      {page === "home" && <Home></Home>}
      {page === "about" && <About></About>}
    </div>
  )
}

export default App

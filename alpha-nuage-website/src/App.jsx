import {useState} from "react";
import TopMenu from "./components/TopMenu.jsx";
import Home from './components/Home.jsx';


function App() {
  const [page, setPage] = useState("home"); // used to determine which page to display

  return (
    <>
      <TopMenu currentPage={page} onNavigate={setPage} />

      {page === "home" && <Home></Home>}
    </>
  )
}

export default App

import {useState} from "react";
import TopMenu from "./components/TopMenu.jsx";
import Home from './components/Home.jsx';


function App() {
  const [page, setPage] = useState("home"); // used to track which page to display

  return (
    <>
      <TopMenu></TopMenu>
      <nav style={{ marginBottom: "20px" }}>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      {page === "home" && <Home></Home>}
    </>
  )
}

export default App

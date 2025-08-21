import TopMenuOption from "./TopMenuOption";

function TopMenu(props) {
    return(<div className='topMenu'>
        <TopMenuOption
          name="Home " 
          onClick = {() => props.onNavigate("home")} 
          isActive={props.currentPage === "home"}
        />
        <TopMenuOption 
          name="About Us"
          onClick={() => props.onNavigate("about")}
          isActive={props.currentPage === "about"}
        />
        <TopMenuOption 
          name="Games"
          onClick={() => props.onNavigate("games")}
          isActive={props.currentPage === "games"}
        />
        <TopMenuOption 
          name="Donate"
          onClick={() => props.onNavigate("donate")}
          isActive={props.TopMenucurrentPage === "donate"}
        />
    </div>);
}

export default TopMenu;
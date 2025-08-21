
function TopMenuOption(props) {
    return(<>
    <p className="topMenuOption" onClick={props.onClick}>{props.name}</p>
    </>);
}

export default TopMenuOption;
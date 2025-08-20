
function TopMenuOption(props) {
    return(<>
    <a className="topMenuOption" href={props.link} target="_blank">{props.name}</a>
    </>);
}

export default TopMenuOption
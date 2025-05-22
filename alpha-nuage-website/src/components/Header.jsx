import banner from '../assets/nuageBanner.jpg'

function Header() {

    return(
        <div>
            <img className='header' src={banner} alt='NUAGE Banner'></img>
            <h1 className='header'>NUAGE</h1>
        </div>
    );
}
export default Header
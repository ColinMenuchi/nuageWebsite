import banner from '../assets/nuageBanner.jpg'

function Header() {

    return(
        <div>
            <img className='header' src={banner} alt='NUAGE Banner'></img>
        </div>
    );
}
export default Header
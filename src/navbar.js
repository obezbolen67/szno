import logo from './logo.png';
import menu from './menu.svg'

export default function Navbar() {
    return (
        <header>
            <div className='navbar'>
                <div className='nav-logo'>
                    <a href='/'><img src={logo} alt=""/></a>
                </div>

                <div className='nav-items'>
                    <a href='home'>Home</a>
                    <a href='lessons'>Lessons</a>
                    <a href='info'>Info</a>
                </div>

                <div className='nav-menu'>
                    <img src={menu} alt=''/>
                </div>

            </div>
        </header>
    )
}
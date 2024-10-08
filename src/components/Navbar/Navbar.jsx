import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>News&Popular</li>
          <li>MyList</li>
          <li>Browse</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} className='icons' />
        <p>Children</p>
        <img src={bell_icon} className='icons' />

        <div className="navbar-profile">
          <img src={profile_img} className='profile' />
          <img src={caret_icon} />
          <div className="dropdown">
            <p>Sign Up Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
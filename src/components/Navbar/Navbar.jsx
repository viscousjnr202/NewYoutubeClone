import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'

const Navbar = ({setSidebar}) => {
  return (
    <div>
      <nav className='flex-div'>
        <div className='nav-left flex-div'>
            <img className='menu-icon' src={menu_icon} alt='' onClick={() => setSidebar(prev => prev?false: true)}/>
            <Link to={'/'}><img className='logo' src={logo} alt=''/></Link>
        </div>
        <div className='nav-middle flex-div'>
          <div className='search-box flex-div'>
            <input type='text' placeholder='Search'/>
            <img className='logo' src={search_icon} alt=''/>
          </div>
        </div>
        <div className='nav-right flex-div'>
            <img src={upload_icon} alt=''/>
            <img src={more_icon} alt=''/>
            <img src={notification_icon} alt=''/>
            <img src={profile_icon} className='user_icon' alt=''/>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

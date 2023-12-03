import React from 'react'
import './Navbar.css';
import logo from '../assets/logo.png';
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="" className='logo'/>
      
      <div className="menu">
<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Home</Link>   
<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">About</Link>      
<Link activeClass='active' to='project' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Projects</Link>      
<Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="menuListItem">Contact</Link> 
</div>
</nav>
    </div>
  )
}

export default Navbar

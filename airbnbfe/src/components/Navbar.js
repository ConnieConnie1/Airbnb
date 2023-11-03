import React from 'react';
import logo from '../assets/logo.png';
import { BiWorld, BiMenu,BiUser } from 'react-icons/bi';



const Navbar = () => {
  return (
    <div className='navbar'>
        {/*Left */}
        <div className='navbar--left'>
            <img src={logo} className='header__logo'/>
        </div>
        {/*Middle */}
        <div className='navbar--middle'>
          
          <div className=''>
          <button className='btn-1'>Anywhere</button>
          <button className='btn-1'>Anyweek</button>
          <input type='search' 
          placeholder='Add guests'/>
          </div>
        </div>
        {/*Right */}
        <div className='navbar--right'>
          <p>Rent house</p>
          <BiWorld />  
          <div>
          <BiMenu />
          <BiUser />
          </div>
        </div>
    </div>
  )
}

export default Navbar
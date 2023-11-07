import React from 'react';
import logo from '../assets-immagini/logo.png';
import { BiWorld, BiMenu,BiUser,BiSearch} from 'react-icons/bi';



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
          placeholder='Add guests'className='input-1'/>
          </div>
          <div className='search'>
          <BiSearch size={22} />
          </div>
        </div>
        {/*Right */}
        <div className='navbar--right'>
          <button className='btn-2'>Rent house</button>
          <button className='btn-2'><BiWorld  size={22}/>  </button>
          <div className='icon__box'>
          <BiMenu  size={26} className='icon'/>
          <BiUser  size={26} className='icon' />
          </div>
        </div>
    </div>

  )
}

export default Navbar
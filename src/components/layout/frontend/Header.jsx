import { Link } from "react-router-dom"
import {useState} from 'react'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCrossCircled} from 'react-icons/rx'
import {FaSun} from 'react-icons/fa';
import {BsFillMoonStarsFill} from 'react-icons/bs'

import logo from '../../../assets/images/logo.png'
import darklogo from '../../../assets/images/darklogo.png'

function Header({setDarkMode, darkMode}) {

  const [mobileMenu, setMobileMenu] = useState(false);

  const active = ()=>{
    setMobileMenu(true)
  }

  const deActive = ()=>{
    setMobileMenu(!mobileMenu)
  }

  return (
    <div className='w-full bg-primary dark:bg-black shadow'>
        <div className=' container h-16 md:h-20 flex justify-between items-center'>
            
            {/* logo */}
            <div className='flex items-center'>
              <Link to='/'>
                <img className="w-64 md:w-72 dark:hidden " src={logo} alt="logo" />
                <img className="w-64 md:w-72 hidden dark:block " src={darklogo} alt="logo" />
              </Link>
            </div>
            <div className="relative md:hidden -top-1 md:top-0 flex items-center justify-center">
                <span onClick={()=> setDarkMode(false)} className={`${!darkMode ? 'hidden' : ''} text-gray-300 cursor-pointer`}><FaSun size={23} /></span>
                <span onClick={()=> setDarkMode(true)} className={`${darkMode ? 'hidden': ''} text-dark cursor-pointer`}><BsFillMoonStarsFill size={21} /></span>
            </div>

            {/* navlink */}
            <div className=' hidden md:flex items-center gap-6 list-none' >
                <div className="relative hidden -top-1 md:top-0 md:flex items-center justify-center">
                    <span title="Switch Light Mode" onClick={()=> setDarkMode(false)} className={`${!darkMode ? 'hidden' : ''} text-gray-300 cursor-pointer`}><FaSun size={23} /></span>
                    <span title="Switch Dark Mode" onClick={()=> setDarkMode(true)} className={`${darkMode ? 'hidden': ''} text-dark cursor-pointer`}><BsFillMoonStarsFill size={21} /></span>
                </div>
                <Link to='/' className='navLink'>Home</Link>
                <Link to='/all-category' className="navLink" >All category</Link>
                <Link to='/about' className='navLink'>About</Link>
                <Link to='/privacy' className='navLink'>Privacy</Link>
                <Link to='/contact' className='navLink'>Contact</Link>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden">
              <span onClick={active} className="text-dark dark:text-gray-300 cursor-pointer relative -top-1" >{<BiMenuAltRight size={30} />}</span>
              <div className={` ${mobileMenu ? 'flex' : 'hidden'} absolute h-screen w-screen justify-end right-0 top-0 bg-[#0000009C] z-50`}>
                <div className="relative w-2/3 py dark:bg-gray-950 bg-secondary ">
                  <span onClick={deActive} className="absolute cursor-pointer top-5 right-5 dark:text-slate-300 text-red-500">{<RxCrossCircled size={25}/>}</span>
                  <div className="flex flex-col px-5 gap-5 mt-10" >
                    <Link onClick={deActive} to='/' className='navLink'>Home</Link>
                    <Link onClick={deActive} to='/all-category' className="navLink" >All category</Link>
                    <Link onClick={deActive} to='/about' className='navLink'>About</Link>
                    <Link onClick={deActive} to='/privacy' className='navLink'>Privacy</Link>
                    <Link onClick={deActive} to='/contact' className='navLink'>Contact</Link>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header
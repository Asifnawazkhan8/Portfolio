import { useState } from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import { navLinks } from '../constants';
import { menu , close,lFire} from '../assets';
const Navbar = () => {

  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={`${styles.paddingX} w-full flex
      items-center  py-5 fixed top-0 z-20 bg-primary `}>
        
        <div className="w-full flex 
        justify-between items-center max-w-7xl mx-auto">
         
          <Link
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={lFire} alt='Logo'
              className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] 
            font-bold cursor-pointer flex'>
              Asif &nbsp;
              <span className='lg:block hidden'>| Web Developer</span>
            </p>
          </Link>
          <ul className='list-none 
          hidden sm:flex flex-row gap-10' >
            {navLinks.map((link) => (
              <li key={link.id} className={`${
                active === link.title 
                ? 'text-white': 'text-secondary'
                } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={()=> setActive(link.title)}
              >
                <a href={`#${link.id}`}>{ link.title }</a>
              </li>
            ))}
          </ul>
          <div className='lg:block hidden' >
            <a href="/CV.pdf" download
              className='gradient-btn rounded-[20px] py-2 px-3 
               text-white'
            ><span className='rounded-[20px]'>Download CV
              <i className="fa fa-cloud-download ml-2" aria-hidden="true"></i></span></a>
          </div>
          <div className='sm:hidden flex flex-1 
          justify-end items-center'>
            <img 
              src={toggle ? close : menu}
              alt="menu"
            className='w-[28px] h-[28px] 
            object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden'
              : 'flex'} p-6 black-gradient absolute 
              top-20 right-0 mx-4 my-2 min-w-[140px]
              z-10 rounded-xl`}  >
              <ul className='list-none 
              flex flex-col justify-end gap-4
              items-start' >
                {navLinks.map((link) => (
                  <li key={link.id} className={`${
                    active === link.title 
                    ? 'text-white': 'text-secondary'
                    } text-[16px] font-poppins
                  font-medium cursor-pointer `}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title)
                    }}
                  >
                    <a href={`#${link.id}`}>{ link.title }</a>
                  </li>
                ))}
                
              </ul>
              
            </div>
          </div>

          
         </div>
      </nav>
    
    </>
  )
}

export default Navbar
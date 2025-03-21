import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
import { logo } from '../assets/images';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    
    return (
        <header className="header">

            {/* Desktop Navbar */}
            <NavLink to="/" className="title-text hidden md:flex">
                Melissa Goon
            </NavLink>
            <nav className="md:flex flex-wrap text-lg gap-6 font-medium hidden">
                <NavLink to="/about" className={({ isActive }) => isActive? 'text-white font-silkscreen' : 'text-black font-silkscreen'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive? 'text-white font-silkscreen' : 'text-black font-silkscreen'}>
                    Projects
                </NavLink>
                <NavLink to="/other" className={({ isActive }) => isActive? 'text-white font-silkscreen tracking-tighter' : ' tracking-tighter text-black font-silkscreen'}>
                    Other Work
                </NavLink>
                <NavLink to="/resume" className={({ isActive }) => isActive? 'text-white font-silkscreen' : 'text-black font-silkscreen'}>
                    Resume
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive? 'text-white font-silkscreen' : 'text-black font-silkscreen'}>
                    Contact
                </NavLink>

            </nav>

            {/* Mobile Navbar */}
            <NavLink to="/" className="md:hidden">
               <img src={logo} alt='Logo' className='h-12'/>
            </NavLink>

            <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white md:hidden focus:outline-none"
             >
            <svg width="36" height="27.39" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="20" width="33" height="4" rx="2" fill="black" fillOpacity="0.75"/>
            <rect y="9" width="33" height="4" rx="2" fill="black" fillOpacity="0.75"/>
            <rect y="31" width="33" height="4" rx="2" fill="black" fillOpacity="0.75"/>
            <path d="M33 0L35.145 8.57054L44.2583 6L37.29 12L44.2583 18L35.145 15.4295L33 24L30.855 15.4295L21.7417 18L28.71 12L21.7417 6L30.855 8.57054L33 0Z" fill="white"/>
            </svg>
            </button>

            {isOpen && (
            <>
                <div
                     className="fixed inset-0 bg-black bg-opacity-20 z-40"
                    onClick={() => setIsOpen(false)}
                />
             <nav className="absolute top-16 right-0 bg-white px-3 py-4 rounded-sm z-50 w-1/2 space-y-4">
                <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block pink-gradient-text font-silkscreen' : 'block text-black font-silkscreen'}>
                About
                </NavLink>
                <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block pink-gradient-text font-silkscreen' : 'block text-black font-silkscreen'}>
                Projects
                </NavLink>
                <NavLink to="/other" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block pink-gradient-text font-silkscreen' : 'block text-black font-silkscreen'}>
                Other Work
                </NavLink>
                <NavLink to="/resume" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block pink-gradient-text font-silkscreen' : 'block text-black font-silkscreen'}>
                Resume
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block pink-gradient-text font-silkscreen' : 'block text-black font-silkscreen'}>
                Contact
                </NavLink>
                
            </nav>
            </>
  )}
        </header>
    )
}
export default Navbar

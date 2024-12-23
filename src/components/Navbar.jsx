import {React, useState} from 'react'
import { NavLink } from "react-router-dom";
import { logo } from '../assets/images';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
    
    return (
        <header className="header z-20">

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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             </svg>
            </button>

            {isOpen && (
            <nav className="mt-4 space-y-2 md:hidden text-sm bg-slate-50">
             <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-silkscreen' : 'block text-black font-silkscreen'}>
                About
            </NavLink>
            <NavLink to="/projects" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-silkscreen' : 'block text-black font-silkscreen'}>
                Projects
            </NavLink>
            <NavLink to="/resume" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-silkscreen' : 'block text-black font-silkscreen'}>
                Resume
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'block text-white font-silkscreen' : 'block text-black font-silkscreen'}>
                Contact
            </NavLink>
            </nav>
            )}

        </header>
    )
}
export default Navbar

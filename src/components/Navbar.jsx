import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    
    return (
        <header className="header">
            <NavLink to="/" className="title-text">
                Melissa Goon
            </NavLink>
            <nav className="flex flex-wrap text-lg gap-6 font-medium">
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
        </header>
    )
}
export default Navbar

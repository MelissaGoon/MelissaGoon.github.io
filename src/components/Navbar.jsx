import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    
    return (
        <header className="header">
            <NavLink to="/" className="title-text">
                Melissa Goon

            </NavLink>
            <nav className="flex text-lg gap-7 font-medium">
                <NavLink to="/about" className={({ isActive }) => isActive? 'text-white font-silkscreen' : 'text-black font-silkscreen'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive? 'text-white font-silkscreen' : 'text-black font-silkscreen'}>
                    Projects
                </NavLink>
            </nav>
        </header>
    )
}
export default Navbar

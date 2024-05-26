import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
function Navbar() {
    return (
        <>
            <nav className='nnav'>
                <div className="logo">
                    <img src="./logo.webp" alt="Logo" />
                </div>
                <ul className='list1'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/add'>Add</Link></li>
                    <li><Link to='/edit'>Edit</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <div className="favorit">
                    <input type="text" placeholder='Searc' /><IoIosSearch />
                   <Link to='/favorit'><MdFavoriteBorder /></Link> 
                </div>


            </nav>
        </>
    )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";

function Navbar() {
    return (
        <>
            <div className='navbar'>
                <div className="Logo">
                    <img src="./logo.webp" alt="Logo" />
                </div>
                <ul className='list'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/add'>Add</Link></li>
                    <li><Link to='/edit'>Edit</Link></li>
                    <li><Link to='/'>Contact</Link></li>
                </ul>
                <div className="favorit">
                    <IoIosSearch />
                    <MdFavoriteBorder />
                </div>


            </div>
        </>
    )
}

export default Navbar
import React from "react";
import {Link} from 'react-router-dom';
export default function Navbar()
{
   return (
    <nav>
        <ul className="sidebar-ul">
            <li className="sidebar-li">
               <Link to="/create"> Create</Link>
            </li>
            <li className="sidebar-li">
               <Link to="/read"> Read</Link>
            </li>
            
            
            <li className="sidebar-li">
               <Link to="/">Home</Link>
            </li>
        </ul>
    </nav>
   )
}
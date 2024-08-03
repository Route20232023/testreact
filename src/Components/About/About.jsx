import React from 'react'
import { Link, Outlet } from 'react-router-dom';

export default function About() {
    return <>
    <div>About</div>
    <ul>
        <li><Link to="">about1</Link></li>
        <li><Link to="about2">about2</Link></li>
        <li><Link to="about3">about3</Link></li>
    </ul>
    <Outlet></Outlet>
  </>

  
}

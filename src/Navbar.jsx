
import './App.css'
import './Navbar.css'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme,setdarktheme]=useState('light-theme')
  const toggletheme=()=>
  {
      if(toggletheme==='dark-theme')
      {
          setdarktheme('light-theme')
      }
      else
      {
          setdarktheme('dark-theme')
      }
  }
  useEffect(()=>{
  
      document.body.className=theme;
  },[theme]);

  return (
   <> 
   <div className="container">
   
   
    <nav>
      <ul>
       <li className="head">☀️ReactCardHub.com</li> 
        <li>
      <button class="glow-on-hover" type="button" onClick={()=>toggletheme()}>  ◐ </button></li>
        <li>Home</li>
        <li>Contact</li>
        <li>Info</li>
        <li>Services</li>
      </ul>
    </nav>
    </div>
    </>
  )
}

import React from 'react'
import {useState} from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'
import Switch from "react-switch";

export default function Nav(props) {

    const [isActive, setIsActive] = useState(false);
  
    const handleClick = () => {
      setIsActive(current => !current);
    };
  
  return (

<nav  className={props.darkMode ? "nav-dark px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" :"nav px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"}>
  <div  className="nav-cont flex flex-wrap justify-between items-center mx-auto">
  <Switch className ="px-11" checked={props.darkMode} onChange={props.toggleDarkMode} offColor={'#b9faf8'} onColor={'#640ef0'} offHandleColor={'#a663cc'} onHandleColor={'#090113'} uncheckedIcon={<div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#090113",
          paddingRight: 2}}><FaMoon/></div>} checkedIcon={<div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#160434",
          paddingRight: 2}}><FaSun/></div>} uncheckedHandleIcon={<div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#6f2dbd",
          paddingRight: 2}}><FaSun/></div>} checkedHandleIcon={<div style={{display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#D5C3E0",
          paddingRight: 2}}><FaMoon/></div>} />
  <div  className="flex md:order-2">
      <a href="http://" target="_blank" rel="noopener noreferrer"><button type="button"  className={props.darkMode ? "resume-dark focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" : " resume focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"}>My Resume</button></a>
      
      <button onClick={handleClick} data-collapse-toggle="navbar-sticky" type="button"  className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span  className="sr-only">Open main menu</span>
        <svg  className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div id="navbar-sticky" className={isActive ? "justify-between items-center w-full md:flex md:w-auto md:order-1"  : "hidden justify-between items-center w-full md:flex md:w-auto md:order-1"}>
    <ul  className={props.darkMode ? "nav-list-dark flex flex-col p-4 mt-4 text-lg rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" :"nav-list flex flex-col p-4 mt-4 text-lg rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"}>
      <li>
        <a href="#"  className="list-item hover-underline-animation block py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 dark:text-white text-lg" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#projects"  className="list-item hover-underline-animation block py-2 pr-4 pl-3 rounded md:p-0 text-lg">Projects</a>
      </li>
      <li>
        <a href="#footer"  className="list-item hover-underline-animation block py-2 pr-4 pl-3 rounded md:p-0 text-lg">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}

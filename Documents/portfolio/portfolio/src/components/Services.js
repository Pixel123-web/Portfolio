import React from 'react'
import Form from '../images/form.png'
import Landing from '../images/huddle.png'
import Django from '../images/pricezilla.png'

export default function Services(props) {
  return (
    <div id='projects' className=' services px-5 w-screen' >
    <h2 className={props.darkMode ? "subhead-dark font-sans text-5xl not-italic font-extrabold tracking-wide leading-loose text-center truncate p-2": "subhead font-sans text-5xl not-italic font-extrabold tracking-wide leading-loose text-center truncate p-2"}>
        Projects
    </h2>
    <div className="flex lg:flex-row flex-col sm:space-y-12 sm:justify-center sm:align-center  lg:space-y-0 w-full text-left mb-9">
   <div className="item w-3/4 lg:w-96 m-auto">
        <a href="https://pixel123-web.github.io/registration-form/" target="_blank" rel="noopener noreferrer">
        <img src={Form} alt="A screenshot of a validated form." />
        <p>A Javascript validated form using Vanilla CSS and JS </p>
        </a>
        
    </div>
	<div className="item w-3/4 lg:w-96 m-auto">
        <a href="https://pixel123-web.github.io" target="_blank" rel="noopener noreferrer">
        <img src={Landing} alt="A screenshot of a landing page." />
        <p>A responsive landing page using HTML, CSS and JS. UI from frontend.io </p>
        </a>
    </div>
	<div className="item w-3/4 lg:w-96 m-auto">
        <a href="http://savage01.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
        <img src={Django} alt="A screenshot of a django website built alongside my team." />
        <p>A fullstack project using HTML,bootstrap and Django. Done alongside the rest of my Zuri internship team.</p>
        </a>
    </div>
</div>
</div>
  )
}

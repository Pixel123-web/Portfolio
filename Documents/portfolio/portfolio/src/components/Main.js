import React from 'react'
import 'animate.css';
import Savage from '../images/savage.png'


export default function Main(props) {
  return (
    <div className=" main intro grid overflow-hidden md:px-12 sm:grid-cols-1 lg:grid-cols-2 grid-rows-1 gap-2 gap-y-5 mt-5 w-screen">
        <div className="box col-start-1 lg:col-end-2">
            <div className={props.darkMode ? "head-dark font-sans text-6xl not-italic font-extrabold tracking-wider text-left p-2 mt-12 leading-snug" :"head font-sans text-6xl not-italic font-extrabold tracking-wider text-left p-2 mt-12 leading-snug"}>
                <p>Hi!</p> 
                <p>I Am</p>
                <p>Savage Fuad.</p> 
            </div>
            <div className="
                    font-sans
                    text-lg
                    p-2
                    lg:w-10/12
                    md:w-11/12
                    leading-loose">
                   <p className='mb-5'> Welcome to my portfolio website!
                    I'm a front-end developer proficient in HTML, CSS, 
                    Bootstrap, Tailwind CSS, JS, ReactJS, Python, Django.</p>
                    <p className='mb-5'> I like to play basketball, play video games and see movies.</p>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta esse architecto, porro, dolor voluptates tenetur fugit sapiente, nam repellat beatae minus ipsum eius placeat? Necessitatibus delectus provident quo ipsam reiciendis placeat consequuntur ullam eligendi recusandae asperiores sit, mollitia, pariatur ut earum aperiam iusto maiores incidunt optio neque. Tenetur, maiores hic.</p>
            </div>
        </div>
	    <div className="box"><img className = 'hero--img mx-auto md:' src={Savage} alt="A picture of me" /></div>
        <hr className='animate__animated animate__backInLeft animate__slow animate__repeat-3'/>
    </div>
  )
}

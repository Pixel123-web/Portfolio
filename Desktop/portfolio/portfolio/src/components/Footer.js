import React from 'react'
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import 'animate.css';

export default function Footer(props) {
  return (
    <div id='footer' className={props.darkMode ?"footer-dark py-7 mt-5 w-screen":'footer py-7 mt-5 w-screen'}>
        <div className="flex justify-center items-center space-x-5 h-1/4 w-auto text-xl">
            <div className="foot-item item w-auto h-auto animate__animated animate__rubberBand animate__slow"><a href="mailto:fuhad.savage@gmail.com" target="_blank" rel="noopener noreferrer"><h1><SiGmail/></h1></a></div>
            <div className="foot-item item w-auto h-auto animate__animated animate__rubberBand animate__slow"><a href="https://github.com/Pixel123-web" target="_blank" rel="noopener noreferrer"><h1><FaGithub/></h1></a></div>
            <div className="foot-item item w-auto h-auto animate__animated animate__rubberBand animate__slow"><a href="https://www.linkedin.com/in/fuad-savage-40a59812b" target="_blank" rel="noopener noreferrer"><h1><FaLinkedin/></h1></a></div>
            <div className="foot-item item w-auto h-auto animate__animated animate__rubberBand animate__slow"><a href="https://twitter.com/savagefuad" target="_blank" rel="noopener noreferrer"><h1><FaTwitterSquare/></h1></a></div>
        </div>
        <p className='text-center'>&copy; 2022 Savage Fuad</p>
    </div>
  )
}

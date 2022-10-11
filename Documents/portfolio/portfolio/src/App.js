import Nav from './components/Nav';
import Main from './components/Main';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';
import 'animate.css';
import { useState } from 'react';

function App() {
   const[darkMode, setDarkMode] = useState(false)
   function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
   }
  return (
    <div className={darkMode ? "container-dark animate__fadeIn":"container animate__fadeIn"}>
      <Nav darkMode = {darkMode} toggleDarkMode={toggleDarkMode}/>
      <Main darkMode = {darkMode} />
      <Services darkMode = {darkMode} />
      <Footer darkMode = {darkMode}/>
    </div>
  );
}

export default App;

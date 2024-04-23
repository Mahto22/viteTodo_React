import React, { useState } from 'react';
import './Header.css';

function About() {
  const [val,setVal] = useState(false);
  const [darkMode,setDarkMode] = useState(false);
  function changeToggle(){
    setVal(!val);
    setDarkMode(!darkMode);
  }
  return (
    <>
    <div className={darkMode ? 'dark' : 'light'}>
      <h2>Hello {val ? 'Rekha' :'Swati'}</h2>
      <button onClick={changeToggle}>Change</button>
    </div>
    </>
  )
}

export default About
import React from 'react';
import newImg from '../../assets/spring-images.jpg';
import '../Header/Home.css';
import Contact from './Contact';
function Home() {
  const newProps= 'Rekha1';
    const name1 = "Rekha Mahto";
  return (
    <>
    <h1 className='heading'>Hello,  {name1}</h1>
    <div className='home'>
    <img src={newImg} />
    <Contact name={newProps} />
    </div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reiciendis porro dolore id dolorem adipisci! Magni doloremque consectetur porro omnis voluptate. Illum unde ex accusantium quis nesciunt iusto atque! Aliquid.</p>
    </>
  )
}

export default Home
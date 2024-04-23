import React from 'react';
import LogoImg from '../../assets/logo.png';
import './Header.css';
function Logo() {
  return (
    <>
        <div>
            <img src={LogoImg} className='logoImg' alt='logo'/>
        </div>
    </>
  )
}

export default Logo
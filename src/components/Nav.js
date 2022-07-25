import React, { useState, useEffect } from 'react';
import "./Nav.css";

export default function Nav() {
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
      window.addEventListener("scroll", () => {
        console.log('window.scrollY',window.scrollY);
        if(window.scrollY > 50) {
            setShow(true);
        } else {
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener("scroll", () => {

        });
      };
    }, [])

    const handleChange = ()=> {

    }


  return (
    <nav className={`nav ${ show && "nav_black" } `}>
    <img
      alt='Netflix logo'
      src="http://purekorea1.dothome.co.kr/Project/img/logo.png"
      className='nav__logo'
      onClick={() => window.location.reload()}
      />

      <input value={searchValue} onChange={handleChange}
        className="nav__input"
        type="text"
        placeholder="Search for your favorite movies." 
      />

      <img
        alt="User logged"
        src="http://purekorea1.dothome.co.kr/Project/img/logged.png"
        className='nav__avatar'
      />  
    </nav>
    );
}

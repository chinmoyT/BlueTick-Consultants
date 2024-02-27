import React, { useEffect, useState } from "react"
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  const [scrol, setScrol] = useState(false)
  useEffect(()=> {
    const handleScroll = ()=> {
      const scrollToTop = window.scrollY;
      if(scrollToTop > 100){
        setScrol(true)
      }
      else{
        setScrol(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return ()=> {
      window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const handleClick = ()=> {
    const currentPath = window.location.pathname;
    if (currentPath === '/contact') {
      navigate('/');
    } else {
      navigate('/contact');
    }
  }
  return (
    <nav className={`py-6 sticky top-0 ${scrol? 'bg-purple-900 opacity-80' : 'bg-purple-900'}`}>
      <div className="container mx-auto flex justify-end items-center">
      <p onClick={handleClick}
        className="text-white hover:text-gray-300 mr-8 text-xl font-bold hover:cursor-pointer transition duration-300 ease-in-out hover:underline">{window.location.pathname === '/contact' ? 'Home' : 'Contact Us'}</p>
        <a href="https://www.bluetickconsultants.com/generative-ai.html" 
        className="text-white hover:text-gray-300 mr-8 text-xl font-bold transition duration-300 ease-in-out hover:underline">About</a>
      </div>
    </nav>
  );
};

export default Navbar;

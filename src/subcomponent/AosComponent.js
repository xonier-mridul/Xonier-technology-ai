"use client"
import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


const AosComponent = () => {
  useEffect(() => {
    Aos.init({
        duration:100,
        delay:0
      
    });
  }, []);
  
  return (
    <>
      
    </>
  )
}

export default AosComponent;

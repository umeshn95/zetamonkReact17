//automate main div-

import React, { Component } from 'react';
import './styles.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './st.scss'
import ContactUs from './ContactUs.';
const GetInTouch = () => {
    return <>
    <div className='GetInTouch_main' >
    <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
      <ContactUs/>
</div>
       

        </>
};

export default GetInTouch;


// basic select




// react slick


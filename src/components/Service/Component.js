import React from 'react'
import {SuperSubgrid2, Head,Desc } from './Service.elements';
import { Button} from '../Aboutus/Aboutus.elements';
import {Link} from 'react-router-dom';
function Component(props) {
  const descriptionMotion = {
    rest: {
      opacity:0,
        y: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut"
      }
    },
    hover: {
     opacity:0.6,
      y: -15,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
  
  const logoMotion = {
    rest: { opacity: 1,y:20, duration:0.8, type: "tween", ease: "easeIn" },
    hover: {
      opacity: 0,
      y:-30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }
  };
  const headingMotion = {
    rest: { opacity: 0.6,y:30, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
      opacity: 1,
      y:-20,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn"
      }
    }}
    
    return (
       
              <Link to= {props.links} style={{textDecoration: 'none' }}>

            <SuperSubgrid2 initial="rest" whileHover="hover" animate="rest">
             {props.icon}
             <Head variants={logoMotion}>{props.head}</Head>
             <Desc variants={descriptionMotion}>{props.desc}</Desc>

                </SuperSubgrid2>
              </Link>


    )
}

export default Component

import { motion } from 'framer-motion'
import React from 'react'
import './quality.css'
const Quality = () => {
    const textMotion = {
        rest: {
          color: "black",
          x: 0,
          transition: {
            duration: 2,
            type: "tween",
            ease: "easeIn"
          }
        },
        hover: {
          color: "#086AD8",
          
          transition: {
            duration: 0.4,
            type: "tween",
            ease: "easeOut"
          }
        }
      };
      
    

      
    return (
     
           
            <motion.div   initial="rest" whileHover="hover" animate="rest" className='quality_main'>
            <motion.div variants={textMotion}  className='quality_assuarance'><h3 className='quality_assuarance_text'> Quality Assuarance System</h3></motion.div>
            <motion.div  className='quality_description'><p className='quality_description_text'>At zzetamonk rvices such as product engineering, warranty management, building cloud, infrastructure, network.</p></motion.div>
            <motion.div className='quality_discover'>Discover Now</motion.div>
        </motion.div>
    
            
            
    )
}

export default Quality

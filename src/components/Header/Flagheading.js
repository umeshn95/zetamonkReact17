import {  Typography } from '@mui/material'
import  {makeStyles}  from '@mui/styles';
import React from 'react'
import india from '../../images/india.jpg'
import { FlagData } from './Flagdata'
import './slider.scss'
// const useStyles = makeStyles(theme=>({
//    animatedItem: {
//       animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`
//     },
    
//     "@keyframes myEffect": {
//       "0%": {
//         opacity: 0,
//         transform: "translateY(-200%)"
//       },
//       "100%": {
//         opacity: 1,
//         transform: "translateY(100)"
//       }
//     },
//    companylogo:{
//        display:'flex',
       
       
//        marginLeft:'90px',
//    },
//    flag:{
       
//    }
   
// }))
const Flagheading = () => {
   //  const classes = useStyles()
    return (
       <div className='slid' style={{position:'relative',width:'800px',marginTop:'-70px',marginLeft:'30px'}}>
        <div className='slider' style={{display:'flex',marginLeft:'130px',position:'absolute',width:'480px',overflow:'hidden'}}>
           <div className='slide-track' style={{display:'flex'}}>
           {FlagData.map((data)=>   
               <>
             <div className='slide' style={{padding:'10px'}} >
               
                <div style={{display:'flex',width:'200px',gap:'20px',cursor:'e-resizenp'}}  ><img style={{height:'20px', width:'20px',alignSelf:'center',justifySelf:'center'}} src={india} alt='india_flag'></img>
                <div style={{display:'flex',flexDirection:'column'}}>

                <p  style={{color:'black',fontSize:'13px',fontWeight:'700',marginBottom:'1px',lineHeight:'1.18'}}>{data.head}</p><p  style={{color:'black',fontSize:'12px',margin:'0',fontWeight:'600',opacity:'0.9',lineHeight:'1.74'}}>{data.text}</p>
                </div>
                </div>
            </div>
               </>
           )}
           </div>
            
        </div>
       </div>
    )
}

export default Flagheading

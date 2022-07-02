import { Container, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import landingimage from '../../images/slider-cybersecurity-slide-01-image-01.png'
import './LandingPage.css'
import Experience from '../Experience/Experience'
import Quality from '../Quality/Quality'
import ReachOut from '../Reachout/ReachOut'
import { Aboutus, CircularProgressba,  Service } from '..'
import Particles from "react-tsparticles";
import Newcounter from '../Newcounter/Countcomponent'
import Newcardcomponent from '../Newcard/Newcardcomponent'
import Steps from '../Steps/Steps'
import DesignDev from '../DesignDev/DesignDev'
import { useState } from 'react'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import SoftwareConsulting from '../SotwareConsulting/SoftwareConsulting'
import MainBanner from '../MainBanner/MainBanner'
import Navbar from '../Navbar/Navbar'
import EngagementModel from '../EngagementModel/EngagementModel'
import Newcard from '../Newcard/Newcard'
import GetInTouch from '../GetInTouch/GetInTouch'
import Furtherinformation from '../Furtherinformation/Furtherinformation'
import ContactUs from '../GetInTouch/ContactUs.'
const LandingPage = () => {
  const [i,setI] = useState(0)
  const [textmoving,setTextmoving] = useState(['success','victory','progres','Triumps'])
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const useStyle = makeStyles({
    landingpage_main: {
      height: '100vh',
     
    


    },
    landingpage_main_text: {
      position: 'relative',
     
    },
    quality_description:{
      margin:'60px 0',
      padding:'80px 0'
    }
  })


  useEffect(() => {
    setTimeout(() => {
      if (i < 4) {
                setI(i+1)
              }    
     
      
          
      }, 1500);
 },[i])


  const classes = useStyle()
  return (
    <>
  
{/* old landing page start */}

{/*  
      <div className='landing_page_main_div'>
      <Grid container className={classes.landingpage_main}>
                <Grid item lg={6} sm={12} xs={12} className={classes.landingpage_main_text}>
               <div style={{padding:'120px'}}>
               <h3 className='figure_plan'>FIGURE PLANS OUT</h3>
              <h1 className='custom_software'><div className='static_txt'>Custom <span style={{ color: '#086AD8' }}>Software</span> Development Focused On Your</div> <ul style={{ color: '#086AD8' }} className='dyanamic_txts'>
                <li><span>{ textmoving[i]}</span></li>
                <li><span>Success</span></li>
              
              
              </ul></h1>
                <button className='button1s'>DIG DEEPER NOW</button>
               </div>
                </Grid>
                <Grid item lg={6} sm={12} xs={12} > <div style={{padding:'20px'}}><img style={{ width:'80%',height:'90vh'}} src={landingimage}></img></div> </Grid>
            </Grid>
      
      </div> */}

      {/* old landing page end */}
      
      


      {/* <Service></Service> */}
      {/* Quality */}

      {/* <Container className={classes.quality_description}>
        <Grid container rowSpacing={3} columnSpacing={3}>
          <Grid item><Quality /> </Grid>
          <Grid item><Quality /> </Grid>
          <Grid item><Quality /> </Grid>

        </Grid>
      </Container> */}
      <MainBanner />

<SoftwareConsulting/>
      <EngagementModel/>
<Steps/>
{/* <DesignDev/> */}
      <HireDeveloper />
      <Newcard />
      {/* <Newcounter/> */}
      {/* <Furtherinformation/> */}
<ContactUs/>

      



    </>
  )
}

export default LandingPage

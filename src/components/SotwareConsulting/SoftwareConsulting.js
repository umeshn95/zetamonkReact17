import React,{useState} from 'react';
import './softwareconsulting.css'
import {webdev} from './data'
import { Grid } from '@mui/material';
import nodejs from '../../images/NodeJS_logo.svg' 
import Elixer from '../../images/Elixer_logo.svg' 
import mongo from '../../images/MongoDB.svg' 
import magent from '../../images/Magento.svg' 
import swifts from '../../images/Swift.svg' 
import kotlins from '../../images/Kotlin.svg' 
import Objectivec from '../../images/Objective-C.svg' 
import aftereffect from '../../images/After-Effects.svg' 
import figmas from '../../images/Figma.svg' 
import invisions from '../../images/Invision.svg' 
import illustrators from '../../images/Illustrator.svg' 
import photoshops from '../../images/Photoshop.svg' 
import marvelicons from '../../images/marvel-icon.svg' 
import jiras from '../../images/Jira.svg' 
import Postmans from '../../images/Postman.svg' 
import SoapUIs from '../../images/SoapUI.svg' 
import etherum from '../../images/Ethereum.svg' 
import Hyperledgers from '../../images/Hyperledger.svg' 
import Mists from '../../images/Mist.svg' 

import Simplycitys from '../../images/Simplycity.svg' 
import Soliditys from '../../images/Solidity.svg' 
import Arduinos from '../../images/Arduino.svg' 
import OpenSCADAs from '../../images/OpenSCADA.svg' 
import Raspbians from '../../images/Raspbian.svg' 
import Tessels from '../../images/Tessel.svg' 

// mui responsive media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';

const SoftwareConsulting = () => {

    return <div className='software_consulting_main'>
        <div className='software_consulting_sub'>
            <div className='software_consulting_development_services'>Software <span style={{color: '#2176ff'}}>Consulting & <br/>
Development Services...</span></div>
            <div className='software_consulting_perfect_blend'>...with the perfect blend of technology, expertise and innovation.</div>
            <div className='software_consulting_perfect_all'>
            
            <SoftwareConsultingAll/>

            </div>
        </div> 
  </div>;
};

export default SoftwareConsulting;




const SoftwareConsultingAll = () => {
   const [j,setJ] = useState(0)

    return <div className='SoftwareConsultingAll_main'>
        <Grid container spacing={3}>
            <Grid item sm={12}  md={6} lg={6}>
                    <Grid container  spacing={2}>
                {webdev.map((w,i) => <>
                    <Grid onClick={()=> setJ(i)} item xs={12} sm={4}  md={4} lg={4} align='center' justify='center'><div className='software_consultin_all_button_main' style={{background: i===j?'linear-gradient(265deg,#1ca3e9,#2176ff)':'white',color: i===j?'white':'black'}} >
                        <div className='software_consultin_all_button_icon'><img style={{height:'30px',width:'30px'}} src={i===j?w.icon1:w.icon}></img></div>
                    <div className='software_consultin_all_button_text'>{ w.text}</div>
                    </div></Grid>
                </>)}
                </Grid>
                
            
            </Grid>
            <Grid item sm={12} md={6} lg={6}>
              <SoftwareConsultingContentBottom name={j}/>
            
            </Grid>
      </Grid>
  </div>;
};



const SoftwareConsultingContentBottom = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
   
    return <>
        
      <div className='software_consulting_web_design_and_development_content'>
            <div className='software_consulting_web_design_and_development_heading'>
                {props.name === 0 ? 'Web Design & Development' : ''}
                {props.name === 1 ? 'Mobile App Development' : ''}
                {props.name === 2 ? 'UI/UX Design' : ''}
                {props.name === 3 ? 'Software Testing Consulting' : ''}
                {props.name === 4 ? 'Blockchain Development' : ''}
                {props.name === 5 ? 'IoT App Development' : ''}
            
            
            
            
            </div>
            <div className='software_consulting_web_design_and_development_description'>
                {props.name === 0 ? 'Scalable web product development at any stage and ongoing support after launch.' : ''}
                {props.name === 1 ? 'Consultation on updating existing mobile applications and development of apps that look and perform great on both iOS and Android.' : ''}
                {props.name === 2 ? 'Award-winning UI/UX consultation and development services to design software products that win the hearts of your customers.' : ''}
                {props.name === 3 ? 'In-depth software QA testing and consultation to develop bug-free software products and meet quality standards.' : ''}
                {props.name === 4 ? 'Wide range of reliable and tailored blockchain software application development services at your disposal.' : ''}
                {props.name === 5 ? 'Proficient IoT app developers to build world-class, scalable, and future-ready IoT applications.' : ''}
            
               </div>
            <div className='software_consulting_web_design_and_development_icons'> <Grid container >
                
{/* web dev */}
            {props.name === 0 ?   (<> <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={nodejs}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Elixer}></img></Grid>
                        <Grid item align='center' justify='center'  xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={mongo}></img></Grid>
                    <Grid item align='center' justify='center'  xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{ height: '40px', width: '40px' }} src={magent}></img></Grid> </>) : ''}
                
                {/* mobile */}
                {props.name === 1 ? (<> <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={swifts}></img></Grid>
                        <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={kotlins}></img></Grid>
                        <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={Objectivec}></img></Grid>
                    </>) : ''}
                
                {/* ui/ux */}
                {props.name === 2 ? (<> <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{height:'40px',width:'40px'}} src={aftereffect}></img></Grid>
                        <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{height:'40px',width:'40px'}} src={figmas}></img></Grid>
                        <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{height:'40px',width:'40px'}} src={invisions}></img></Grid>
                    <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{ height: '40px', width: '40px' }} src={illustrators}></img></Grid>
                    <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{ height: '40px', width: '40px' }} src={photoshops}></img></Grid>
                    <Grid item align='center' justify='center' xs={2} sm={2} md={2} xl={2}  lg={matches?2:1}> <img style={{ height: '40px', width: '40px' }} src={marvelicons}></img></Grid>
                
                </>) : ''}

                {/* software testing */}
                {props.name === 3 ? (<> <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={jiras}></img></Grid>
                        <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{height:'40px',width:'40px'}} src={Postmans}></img></Grid>
                    <Grid item align='center' justify='center' xs={4} sm={4} md={4} xl={4}  lg={matches?4:1}> <img style={{ height: '40px', width: '40px' }} src={SoapUIs}></img></Grid> </>) : ''}
                
                {/* blockchain */}
                {props.name === 4 ? (<> <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{height:'40px',width:'40px'}} src={etherum}></img></Grid>
                        <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{height:'40px',width:'40px'}} src={Hyperledgers}></img></Grid>
                        <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{height:'40px',width:'40px'}} src={Mists}></img></Grid>
                    <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{ height: '40px', width: '40px' }} src={Simplycitys}></img></Grid>
                    <Grid item align='center' justify='center' xs={2.4} sm={2.4} md={2.4} xl={2.4}  lg={matches?2.4:1}> <img style={{ height: '40px', width: '40px' }} src={Soliditys}></img></Grid>
                
                </>) : ''}
                
                {/* iot */}
                {props.name === 5 ?(<> <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Arduinos}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={OpenSCADAs}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Raspbians}></img></Grid>
                        <Grid item align='center' justify='center' xs={3} sm={3} md={3} xl={3}  lg={matches?3:1}> <img style={{height:'40px',width:'40px'}} src={Tessels}></img></Grid> </>) : ''}
            
                      
                     
                        
                    
                    </Grid></div>
          {props.name===0?  <Link to='/webdev'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===1?  <Link to='/appdev'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===2?  <Link to='/Uiux'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===3?  <Link to='/qualityAssurance'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===4?  <Link to='/enterprisedevelopment'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}
          {props.name===5?  <Link to='/iot'>
            <div className='software_consulting_web_design_and_development_learn_more'> Learn More</div>
            </Link>:""}

        </div>
        
    </>;
};






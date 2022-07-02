import { Grid } from '@mui/material';
import React from 'react';
import Stepscomponent from './Stepscomponent';
import './steps.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
const Steps = () => {
  return <div className='steps_main_component'>
      <Grid container style={{paddingBottom:'40px'}}>
    <Grid item md={8} lg={8}>
    <div className='steps_main_text'>HOW WE WORKS</div>
    <div className='steps_main_heading'>How ZetaMonk assist <span style={{color:'#086ad8'}}> your business</span></div>
    </Grid>
    <Grid  item md={4} lg={4} align='center' justify='center'><div className='stepscomponent_steps_mark'> <mark style={{background: 'none',
    textDecoration: 'none',position:'absolute',fontSize:"120px",fontWeight:'600',marginTop:"-60px",zIndex:'-1',color:"#ededed"}}>04</mark>STEPS</div></Grid>
      </Grid>
      <Grid  container spacing={4}>
      <Grid item md={6} lg={3} >
          <Stepscomponent count="01" heading="01. Free consultation" description="Customer connecting to us through any medium will get free and unbiased consultation and we help customer to connect the best in market technology with their requirement."/>
      </Grid>
      <Grid item md={6} lg={3} >
        <Stepscomponent
        count="02" heading="02. Assign Team" description="After successful discussion regarding customer need requirement we Assign best in market Team for specific technology Stack."
        />
      </Grid>
      <Grid item md={6} lg={3} >
        <Stepscomponent
        count="03" heading="03. Testing" description="Testing is essential part for any development so we provide proper testing for product before actual delivery."
        />
      </Grid>
      <Grid item md={6} lg={3} >
      <div className='stepscomponent_main'>
      <div className='stepscomponent_sub'>
    <div className='stepcomponents_count'>04</div>
    <div className='stepscomponent_discussion'>
    <div className='stepscomponent_discussion_heading'>04. Deliver</div>
    <div className='stepscomponent_discussion_description'>We meet customers in set place to discuss the details about needs and demands before proposing a plan.</div>
    <div className='stepscomponent_discussion_button'>Learn More <AiOutlineArrowRight/></div>
    </div>
    </div>
    </div>
      </Grid>


      </Grid>

  </div>;
};

export default Steps;

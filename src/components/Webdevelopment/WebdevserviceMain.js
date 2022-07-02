import  Grid  from '@mui/material/Grid';
import React from 'react';
import './styles.css'
const WebdevserviceMain = ({heading,description,point1,point2,point3,icon}) => {
  return <div className='webdev_service_main'>
      
  <div className='webdev_service_sub'>
          <Grid container>
              <Grid item lg={6}>
          <div className='webdev_services_sub_left'>
            <div className='webdev_service_heading'>{ heading}</div>
            <div className='webdev_service_description'>{ description }</div>
                  <div className='webdev_service_points'>
              <div style={{ display: 'flex', paddingBottom: '1rem' }}> <span className='webdev_service_points1' ></span> <span>{ point1 }</span> </div> 
              <div style={{display:'flex',paddingBottom:'1rem'}}> <span className='webdev_service_points1' ></span> <span>{ point2 }</span> </div>
              <div style={{ display: 'flex', paddingBottom: '1rem' }}> <span className='webdev_service_points1' ></span> <span>{ point3 }</span> </div>
        
          </div>
         
                  <div className='webdev_service_button'>Get a Free Consultation </div>
                 </div>
              </Grid>
              <Grid item lg={6}>
                  <img className='webdev_service_webdevimages' src={icon}></img>
              </Grid>
</Grid>

  </div>
</div>;
};

export default WebdevserviceMain;

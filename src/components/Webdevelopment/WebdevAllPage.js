// automate script
import './styles.css'

import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
const WebdevAllPage = () => {
    return <div className='WebdevAllPage_main'>
      
        <div className='WebdevAllPage_sub'>
        <div className='WebdevAllPage_heading'></div>
        <div className='WebdevAllPage_description'></div>
        
            <Grid container>
                <Grid item  sm={6} lg={4}>
                <WebdevSingleCardPage/>
                </Grid>
        </Grid>


        </div>
  </div>;
};

export default WebdevAllPage;

// webdevallpage single component
export const WebdevSingleCardPage = () => {
    return <div className='WebdevSingleCardPage_main'>
        <div className='WebdevSingleCardPage_icon' ></div>
        <div className='WebdevSingleCardPage_heading' ></div>
        <div className='WebdevSingleCardPage_description' ></div>
      
  </div>;
};

export default WebdevSingleCardPage;

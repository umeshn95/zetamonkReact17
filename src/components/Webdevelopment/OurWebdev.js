// automate script

import Grid from "@material-ui/core/Grid";
import './styles.css'
import React from 'react';

const OurWebdev = () => {
    return <div className='OurWebdev_main'>
      
        <div className='OurWebdev_sub'>
            <Grid container>
                <Grid item lg={6}>image</Grid>
                <Grid item lg={6}> description</Grid>
        </Grid>

        </div>
  </div>;
};

export default OurWebdev;
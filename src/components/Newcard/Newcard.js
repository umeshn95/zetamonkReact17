import { Container, Grid } from '@mui/material';
import React from 'react';
import Newcardcomponent from './Newcardcomponent';

const Newcard = () => {
  return <div className='newcard_main'>
<Container>
        <div className='new_pricinf_plan' > PRICING AND PLAN </div>
        <div className='new_monthly_fee' > 1 monthly fee for <span style={{color:'#086AD8'}}>all IT services.</span> </div>
      <Grid container  spacing={3}>
<Grid item xs={12} sm={12} md={4}  lg={4}>  
<Newcardcomponent/>
</Grid>
<Grid item xs={12} sm={12} md={4}  lg={4}>  
<Newcardcomponent/>
</Grid>
<Grid item xs={12} sm={12} md={4}  lg={4}>  
<Newcardcomponent/>
</Grid>



      </Grid>

  </Container>
  </div>;
};

export default Newcard;

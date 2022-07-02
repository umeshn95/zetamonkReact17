import { Container, Divider, Grid } from '@mui/material'
import React from 'react'
import Contactform from './Contactform'
import './furtherinfprmation.css'
const Furtherinformation = () => {
    return (
        <div className='furtherinformation_main'>
                 <Container>
            <Grid container>    
                <Grid item md={6} lg={6}> 
                <div className='furtherinformation_text'>
                    <div className='furtherinformation_text1'> <div className='obtaining_further'> To make requests for further information, <span style={{color:'#086AD8'}}>make a contact</span> via our social channels. </div>  </div>
                    <div className='furtherinformation_text2'>We’re available for 8 hours a day! <br/>
                        Contact to require a detailed analysis and assessment of your plan</div>
                    <div></div>
                     </div></Grid>
                <Grid item md={6} lg={6}> <Contactform/></Grid>

            </Grid>
        </Container>
   </div>
    )
}

export default Furtherinformation

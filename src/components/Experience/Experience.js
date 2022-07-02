import { makeStyles } from '@material-ui/styles'
import { Container, Grid } from '@mui/material'
import React from 'react'
import './experience.css'
const Experience = () => {
    const useStyle = makeStyles({
        maincontainer:{
                }
    })

    const classes = useStyle()
    return (
       <div className='experience_main'>
            <Container spacing={4} className={classes.maincontainer}>
            <Grid Container direction='column'>
<Grid item><h3 style={{textAlign:'center'}} className='figure_plans'>DIG DEEPER NOW</h3></Grid>
<Grid item><h1 className='we_run' style={{textAlign:'center',textTransform:'uppercase'}} > WE RUN all kinds of IT services that
vow your <span style={{color:'#086AD8'}}>success</span></h1></Grid>
<Grid item>
    <div className='years'>
        <div className='experience_year_number' ><span className='experience_number'>7</span><span className='figure_plans' style={{textTransform:'uppercase',alignSelf:'flex-end'}}>Years’ Experience in IT</span></div>
        <div style={{flexBasis:'40%'}}>
<p className='experience_description'>ZetaMonk  specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it.
</p>
</div>
    </div>
</Grid>
            </Grid>
        </Container>
       </div>
    )
}

export default Experience

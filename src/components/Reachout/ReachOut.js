import {  Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './reachout.css'

const ReachOut = ({heading,description,heading1}) => {

    return (
        <>
            <div className='reachot_main'>
                <Grid container direction='column' alignItems="center"
                    justifyContent="center">
                    <Grid item><h3 style={{ textAlign: 'center' }} className='figure_plans_r'>OPTIMAL TECHNOLOGY SOLUTIONS</h3></Grid>
                    <Grid item><h1 className='we_run_r' style={{ textAlign: 'center' }} > { description }<span style={{ color: '#086AD8' }}> Experts.</span></h1></Grid>
                </Grid>

            </div>
            <div style={{ padding:"30px", background: 'white', backdropFilter: 'blur(30px)' }}>
            <Grid container spacing={4}  >
          {heading1.map((r)=><>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
        <Link style={{textDecoration:'none'}} to={r.link}>
                      <div className='webdev_main'>
                          <img style={{height:'40px',width:'40px'}} src={r.icon}></img>
                            <div className='webdev_sub1' >{r.heading}</div>
                           <div className='webdev_sub2'>{r.description}</div>
                              <div className='webdev_sub3'>Discover now</div>
        </div>
        </Link>
         
       </Grid>
          </>)}
       </Grid>
            
            </div>
        </>
    )
}

export default ReachOut

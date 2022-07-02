import { Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './reachout.css'
import { reachout } from './reachoutdata'

const Webdev = ({heading1}) => {
    return (
       <Grid container spacing={2}  alignItems="center"
       justifyContent="center" style={{background:'white'}}>
          {heading1.map((r)=><>
            <Grid item>
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
    )
}

export default Webdev

// automate script

import './styles.css'
import React from 'react';
import webdevprocessimages from '../../images/wedevprocessimage.svg'
import  Grid  from '@mui/material/Grid';

const WebdevProcessPage = () => {
    return <div className='WebdevProcessPage_main'>
      
        <div className='WebdevProcessPagel_sub'>
            <div className='WebdevProcessPage_heading'>How <span style={{color:'#2176ff'}}>Web Development Outsourcing</span> <br/>
With InvoZone Works?</div>
            <Grid container>
                <Grid align='center' justify='center' item xs={12} sm={12} md={6}  lg={6} xl={6}>
                    <img className='WebdevProcessPage_image' src={webdevprocessimages}></img>
                </Grid>
                <Grid item xs={12} sm={12} md={6}  lg={6} xl={6}>
                    <Grid direction='column' container>
                        <Grid  xs={12} sm={12} md={12}  lg={12} xl={12} item>
                            <WebdevProcessPageRight/>
                        </Grid>
                </Grid>
                </Grid>
            </Grid>


        </div>
  </div>;
};

export default WebdevProcessPage;


export const WebdevProcessPageRight = () => {
    return <div className='WebdevProcessPageRight_main'>
        <Grid container>
            <Grid item xs={1} sm={1} lg={0.9}>
                <div className='WebdevProcessPageRight_discuss_circle'></div>
            </Grid>
            <Grid item xs={11} sm={11} lg={11.1}>
                <div className='WebdevProcessPageRight_discuss_heading'>Discuss Your Requirements</div>
                <div className='WebdevProcessPageRight_discuss_description'>Schedule a meeting to discuss your project ideas and
                <br/>    requirements with one of our team members.</div>
            </Grid>
      </Grid>
        <Grid container>
            <Grid item xs={1} sm={1} lg={0.9}>
                <div className='WebdevProcessPageRight_discuss_circle2'></div>
            </Grid>
            <Grid item xs={11} sm={11} lg={11.1}>
                <div className='WebdevProcessPageRight_discuss_heading'>Get a Proposal</div>
                <div className='WebdevProcessPageRight_discuss_description'>We review your requirements and identify web solutions that are
                <br/>  effective and feasible as per your needs.</div>
            </Grid>
      </Grid>
            <Grid container>
                <Grid item xs={1} sm={1} lg={0.9}>
                    <div className='WebdevProcessPageRight_discuss_circle3'></div>
                </Grid>
                <Grid item xs={11} sm={11} lg={11.1}>
                    <div className='WebdevProcessPageRight_discuss_heading'>Web Development and Designing</div>
                    <div className='WebdevProcessPageRight_discuss_description'>Once the requirements are identified, the team starts developing
                    <br/>    the solution.</div>
                </Grid>
        </Grid>
            <Grid container>
                <Grid item xs={1} sm={1} lg={0.9}>
                    <div className='WebdevProcessPageRight_discuss_circle4'></div>
                </Grid>
                <Grid item xs={11} sm={11} lg={11.1}>
                    <div className='WebdevProcessPageRight_discuss_heading'>Quality Assurance</div>
                    <div className='WebdevProcessPageRight_discuss_description'>After development and final review from the client, the quality
                    <br/>  assurance team ensures that everything is on track.</div>
                </Grid>
        </Grid>
            <Grid container>
                <Grid item xs={1} sm={1} lg={0.9}>
                    <div className='WebdevProcessPageRight_discuss_circle5'></div>
                </Grid>
                <Grid item xs={11} sm={11} lg={11.1}>
                    <div className='WebdevProcessPageRight_discuss_heading'>Project Launch</div>
                    <div className='WebdevProcessPageRight_discuss_description'>Our team launches your brand-new site after all checks and
                    <br/> revisions have been cleared to ensure the highest standard.</div>
                </Grid>
        </Grid>
       
      
      
     
  </div>;
};


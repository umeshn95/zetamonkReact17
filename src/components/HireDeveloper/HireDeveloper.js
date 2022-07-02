import { Grid } from '@mui/material';
import React from 'react';
import './HireDeveloper.css'
const HireDeveloper = () => {
    return <div className='hire_developer_main'>
        <div className='hiredeveloper_sub'>
        <div className='hiredeveloper_sub1'>
        <Grid Container direction='column'>
<Grid xs={12} sm={12} item><h3 style={{textAlign:'center'}} className='figure_plans'>Choose How <span style={{color:'#086AD8'}}>YOU WANT</span> to Collaborate</h3></Grid>
<Grid xs={12} sm={12} item><h1 className='we_run' style={{textAlign:'center'}} >  Dedicated Web Developers <span style={{color:'#086AD8'}}>Hire</span></h1></Grid>  
     </Grid>
        </div>
        <div className='hiredeveloper_sub2'>
          <Grid container spacing={2}>
          <Grid align='center' justify='center' item xs={12} sm={6} md={3} lg={3}>
              <div className='hire_developer_project_based'>
                <div className='hire_developer_project_based_image'>
                  <img style={{width:'128px',height:'128px'}} src='https://invozone.com/static/collaboration-project-based-3685b138a850f13df14803918ace6919.svg'></img>
                </div>
                <div className='hire_developer_project_based_text'>Project-Based</div>
            </div>

            </Grid>
            <Grid align='center' justify='center' item  xs={12} sm={6} md={3} lg={3}>
              <div className='hire_developer_project_based'>
                <div className='hire_developer_project_based_image'>
                  <img style={{width:'128px',height:'128px'}} src='https://invozone.com/static/collaboration-hourly-56141a94876cd595a6927dfa53c4c46e.svg'></img>
                </div>
                <div className='hire_developer_project_based_text'>Hire Developer Hourly Basis</div>
            </div>

            </Grid>
            <Grid align='center' justify='center' item  xs={12} sm={6} md={3} lg={3}>
              <div className='hire_developer_project_based'>
                <div className='hire_developer_project_based_image'>
                  <img style={{width:'128px',height:'128px'}} src='https://invozone.com/static/collaboration-team-cbab9433f82f6d9f31fb2c73a5286541.svg'></img>
                </div>
                <div className='hire_developer_project_based_text'>Dedicated Team of Developer</div>
            </div>

            </Grid>
            <Grid align='center' justify='center' item  xs={12} sm={6} md={3} lg={3}>
              <div className='hire_developer_project_based'>
                <div className='hire_developer_project_based_image'>
                  <img style={{width:'128px',height:'128px'}} src='https://invozone.com/static/collaboration-ask-1e39e0004eba7d817dc000730173b2b8.svg'></img>
                </div>
                <div className='hire_developer_project_based_text'>I'm not sure?</div>
            </div>

            </Grid>
          
         
      </Grid>
        </div>
      </div>
  </div>;
};

export default HireDeveloper;

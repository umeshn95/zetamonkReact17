// automate script

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import  Grid  from '@mui/material/Grid';
import React from 'react';
import './engagementmodel.css'
import engage from '../../images/engagement.svg'
import staff from '../../images/staff_engagement.svg'
import productdevelopement from '../../images/productdev.svg'
import dedicateddeveloper from '../../images/dedicated.svg'

// mui responsive media query
const EngagementModel = () => {

    
const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.down("md"));
    return <div className='engagementmodel_main'>
      
        <div className='engagementmodel_sub'>

            <Grid align='center' justify='center' container spacing={4}>
                <Grid item sm={12} md={6} lg={6}>
                    <div className='engagement_model_leftpart_main'>
                    <div className='engagement_model_leftpart_heading'>
                    Engagement <span style={{color:'#2176FF'}}>Models</span>
                        </div>
                        <div className='engagement_model_leftpart_description'>
                        We solve your biggest business pains and help you succeed. <br/>
                        Here is how we can work together
                        </div>
                        <div className='engagement_model_leftpart_image'>
                            <img style={{width:matches?'310px':'370px',height:'300px'}} src={engage}/>
                </div>
                    </div>
                </Grid>
                <Grid item sm={12} md={6} lg={6}>
                    <div className='engagement_model_call' >
                        <div className='engagement_model_call1'>
                            <EngagementModelRight heading="Staff/Resource Augmentation" description="Our staff augmentation model is intended to help companies find the right skills for their project."
                            image={staff}
                            />
                       </div>
                        <div className='engagement_model_call2'>
                        <EngagementModelRight heading="Dedicated Development Team" description="Our team of developers is highly qualified and dedicated to delivering quality development services to clients."
                            image={dedicateddeveloper}
                            />
                       </div>
                        <div className='engagement_model_call3'>
                        <EngagementModelRight heading="Product Development" description="The project-based model is designed to help you get your product built from ideation to deployment by a team of expert software engineering consultants."
                            image={productdevelopement}
                            />
                       </div>
                      
               </div>
                </Grid>
            </Grid>
            <div className='engagementmodel_view_pricing'>  <button>View Pricing </button></div>
        </div>
  </div>;
};

export default EngagementModel;



export const EngagementModelRight = ({heading,description,image}) => {
    return <div className='engagementmodelright_staff_main'>
        <Grid container spacing={2}>
            <Grid item xs={12} lg={1.4}> <img style={{width:'55px',height:'55px'}} src={ image}/> </Grid>
            <Grid item xs={12} lg={10.6}>
                <div >
                    <div className='engagementmodel_staff'>{ heading}</div>
                    <div className='engagementmodel_staff_description'>{ description}</div>
                    </div>

            </Grid>
      </Grid>
        
  </div>;
};



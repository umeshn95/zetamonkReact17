import React from 'react';


import {
   Main,
    AboutSecrCard,
    AboutSecrCardInfo,
    AboutSecrCardIcon,
  
  } from './AboutSecret.elements';
function AboutSec(props) {
    return (
        <>
           <Main>
           <AboutSecrCard>
            <AboutSecrCardIcon>
              <h2>{props.heading}</h2>
              {props.icon}
            </AboutSecrCardIcon>
            <AboutSecrCardInfo>
              <ul  style={{ listStyleType: 'none'}}>
                <li style={{ margin: '15px'}}>{props.list1}</li>
                <li style={{ margin: '15px'}}>{props.list2}</li>
                <li style={{ margin: '15px'}}>{props.list3}</li>
              </ul>
            </AboutSecrCardInfo>
            </AboutSecrCard> 
             </Main>  
        </>
    )
}

export default AboutSec

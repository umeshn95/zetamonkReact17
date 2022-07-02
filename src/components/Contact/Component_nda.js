import React from 'react';
import Component_development from '../Webdevelopment/component_development';
import Component_header from '../Webdevelopment/component_header';

import {Grid, grid} from'./Contact.elements';

function Component_nda(){ 
    
    return(
<div style={{padding:'40px'}}>
   <Component_header heading='We’re Here to Help' description='We listen to your requirements analyze and suggest the best approach possible for your development.'/> 
 <Grid>
     <div>
         <h2  style={{maxWidth:'400px', padding:'10px'}}>Share Your
Requirement</h2>
         <p style={{maxWidth:'300px', padding:'10px' ,fontSize:'17px'}}>We keenly analyze your requirements from the beginning for a seamless development process.</p>
     </div>
     <div>
         <h2  style={{maxWidth:'400px', padding:'10px'}}>Non Disclosure
Agreement (NDA)</h2>
         <p style={{maxWidth:'300px', padding:'10px' ,fontSize:'17px'}}>Your business ideas are always safe with us. We assure you complete confidentiality with NDA.</p>
     </div>
     <div>
         <h2  style={{maxWidth:'400px', padding:'10px'}}>Understanding Your 
Requirement</h2>
         <p style={{maxWidth:'300px', padding:'10px' ,fontSize:'17px'}}>Once we have your requirement, we will allocate our expert team for consultation to choose the right approach.</p>
     </div>

 </Grid>

</div>

)}

export default Component_nda;

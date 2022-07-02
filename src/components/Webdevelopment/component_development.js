import React from "react";
import { Headc,Description, SuperSubgrid1, SuperSubgrid2 } from "./Webdevelopment.element";

function Component_development(props) {
  return (
    <SuperSubgrid1>
  <img src={props.image} style={{height:'225px',width:'225px'}}></img>
   <div>
   <Headc  style={{padding:'20px'}}>
    {props.head}</Headc>
    <Description  style={{paddingLeft:'20px'}}>
{props.description}
    </Description>
   </div>

</SuperSubgrid1 >
  );
}

export default Component_development;
import React from "react";
import { Logo,Headc,Description, SuperSubgrid } from "./Webdevelopment.element";

function Component_contents(props) {
  return (
    <SuperSubgrid>
    <Logo >{props.logo}</Logo>
    <Headc style={{textAlign:'center'}}>
    {props.head}</Headc>
    <Description  style={{textAlign:'center'}}>
{props.description}
    </Description>
</SuperSubgrid >
  );
}

export default Component_contents;
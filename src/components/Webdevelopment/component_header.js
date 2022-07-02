import React from "react";
import { Description, Headergrid, Headings } from "./Webdevelopment.element";

function Component_header(props) {
  return (
    <Headergrid>
      <Headings>{props.heading}</Headings>
      <Description>
        {props.description}
      </Description>
    </Headergrid>
  );
}

export default Component_header;

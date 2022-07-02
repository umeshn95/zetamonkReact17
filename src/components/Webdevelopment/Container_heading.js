import React from "react";
import { Head } from "./Webdevelopment.element";

function Container_heading(props) {
  return (
    <>
     <Head>
   {props.heading}
     </Head>

    </>
  );
}

export default Container_heading;
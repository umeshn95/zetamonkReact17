import React from "react";
import { MainGrid } from "./Webdevelopment.element";
import {
  Headings,
  Longdescription,
  Shortdescription,
} from "../Aboutus/Aboutus.elements";
import office from "../../images/pexels-christina-morillo-1181355.jpg";
function Component_services() {
  return (
    <MainGrid style={{paddingBottom:'40px'}}>
      <div style={{  }}>
        <Headings>Enterprise Services</Headings>
        <Shortdescription>
          Solutions that makes a visible difference
        </Shortdescription>
        <Longdescription>
          We provide implementation and customization services on ERPNext.
          ERPNext is an Open Source, Web-Based platform that
          integrates your entire organization and helps your employees focus on
          the right priorities. With a centralized, secure database, all
          authorized users get to see the latest status of various activities -
          buying, manufacturing, deliveries, helping your employees manage
          customer expectations more efficiently and productively. Innovate
          faster, be more resilient and get an edge on your competition with
          ERPNext.
        </Longdescription>
      </div>

      <img
        src={office}
        style={{
          height: "30rem",
          width: "90%",
          justifySelf: "center",
          alignSelf: "center",
        }}
      ></img>
    </MainGrid>
  );
}

export default Component_services;

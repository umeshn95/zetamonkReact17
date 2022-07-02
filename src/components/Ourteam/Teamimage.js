import React from "react";
import team from "../../images/team.jpg";
import { Img, P } from "./Ourteam.element";
function Teamimage() {
  return (
    <div style={{position:'relative',textAlign:'center',color:'white'}}>
      <Img src={team}></Img>
      {/* <p style={{ position:'absolute',top:'35%',left:'30%',transform:'translate(-50%,-50%)',fontSize:'3.5vw',fontWeight:'500'}}>Our Team</p> */}
      <P>Meet Our Team of Digital Warriors,ready to harness the Force for good.</P>
    </div>
    
  );
}

export default Teamimage;

import styled from "styled-components";
import { motion } from "framer-motion";


export const Main = styled.div`
margin:0;
padding:50px;

box-size:border-box;
background:white;
height:800px;
width:100%;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
  top:100px;
  display:none;
    }
  }
`;
export const MainGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;
export const MainImage = styled.div`

`;
export const Subgrid = styled.div`
  display:grid;
  grid-template-rows:0.1fr 0.1fr 0.1fr 0.4fr;
 
  }
`;

export const Shortheading = styled.div`
color:blue;
text-transform: uppercase;
font-size:13px;
font-weight:600;
@media screen and (max-width: 768px) {
  width:100%;padding:5px 30px 0 30px;}
`;
export const Heading = styled.div`
font-size:37px;
font-weight:800;
color:#232323;
letter-spacing: -2.2px;
width:50%;
line-height:150%;
opacity:0.8;
@media screen and (max-width: 768px) {
  width:100%;padding:5px 30px 0 30px;}
  
`;
export const Subheading = styled.div`
font-size:22px;
color:#232323;
line-height:170%;
padding:25px 0 35px 0;
width:60%;
opacity:0.6;
@media screen and (max-width: 768px) {
  width:100%;padding:5px 30px 0 30px;}

`;
export const Description = styled.div`
width:100%;
@media screen and (max-width: 768px) {
  display:none;
}
`;



//Accordion
export const AccordionSection = styled.div`
font-family: 'Arvo', serif;
border-radius:5px;
diplay:flex;
flex-direction:column;
align-item:center;
position:relative;
height:40vh;
background: #fff;
@media screen and (max-width: 768px) {
  width:100%;
  padding:30px;
  
  }
`;
export const Container = styled.div`
position:absolute;
box-shadow: 2px 10px 35px 1px rgba(153,153,153,0.3);
`;
export const Wrap = styled.div`
background:white;
color:black;
display:flex;
justify-content:space-between;
align-items:center;
width:450px;
cursor:pointer;
span{
  margin-right:1.5rem;
}
h1{
  padding: 1.8rem;
  font-size:1.3rem;
}
@media screen and (max-width: 768px) {
  width:100%;
  
  }
`;
export const Dropdown = styled.div`

background:white;
color:black;
display:flex;
justify-content:center;
align-items:center;
width:450px;
height:100px;
cursor:pointer;
border-bottom: 1px solid rgba(0,0,0,0,0.3);
border-top:1px solid rgba(0,0,0,0,0.3);
p{
  font-size:1rem;
  padding:0px 40px 20px 20px;
  
}
@media screen and (max-width: 768px) {
width:100%;
padding:3em;

}

`;

  
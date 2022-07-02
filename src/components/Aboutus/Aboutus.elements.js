import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Main = styled.div`
// margin-bottom:60px;
padding:0;
margin-top:70px;
box-size:border-box;
background:white;
height:100vh;
width:100%;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
  height:100vh;
}
  }
`;
export const MainGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
width:100%;
column-gap:10px;
padding:0px 160px 0 200px;
@media screen and (max-width: 768px) {
grid-template-columns: 1fr;
grid-template-rows:1fr;
  padding:30px;

}
  }
`;
export const Subgrid1 = styled.div`
  display:grid;
  grid-template-rows:0.2fr 0.2fr 0.3fr 0.7fr 1fr;
  @media screen and (max-width: 768px) {
  grid-template-rows:0.1fr 0.1fr 0.1fr 0.5fr 0.1fr;
  }
  }
`;

export const About = styled.div`
  color:blue;
  text-transform: uppercase;
  font-size:13px;
  font-weight:600;

`;
export const Headings = styled.div`
font-size:37px;
font-weight:800;
// color:#232323;
letter-spacing: -2.2px;
width:60%;
line-height:100%;
// opacity:0.8;
@media screen and (max-width: 768px) {
  width:90%;
}
  
`;
export const Shortdescription = styled.div`
font-size:22px;
color:#232323;
line-height:170%;
padding:25px 0 0 0;
width:80%;
// opacity:0.6;
@media screen and (max-width: 768px) {
  width:100%;


} 
`;  
export const Longdescription = styled.div`
font-size:17px;
color:#232323;
line-height:170%;
padding:15px 0 35px 0;
width:80%;
// opacity:0.9;
@media screen and (max-width: 768px) {
  padding:15px 0 35px 0;
  width:100%;

}
  
`;
export const Button = styled.button`
height:50px;
width:180px;
font-size:15px;
font-weight:700;
background:linear-gradient(104deg, rgba(11,15,214,1) 0%, rgba(43,117,195,1) 54%, rgba(113,153,222,1) 98%);
cursor:pointer;
color:white;
border:none;
border-radius:7px;
  &:hover{
    background:linear-gradient(104deg, rgba(113,153,222,1) 0%, rgba(43,117,195,1) 54%,  rgba(11,15,214,1) 98%);
  }
 
`;
export const ButtonGrid = styled.div`

`;

export const Subgrid2 = styled.div`
display:grid;
grid-template-rows:0.1fr 0.1fr;
grid-template-columns:0.5fr 0.5fr;
padding:10px;
column-gap:20px;
row-gap:50px;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr;
  row-gap:10px;
  display:none;
}
  }
`;
export const SuperSubgrid1 = styled(motion.div)`
box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.09), 0 10px 24px 0 rgba(0, 0, 0, 0.09);
display:grid;
grid-template-rows:0.1fr 0.1fr 0.1fr;
row-gap:15px;
border-radius:5px;
cursor:pointer;
padding:20px;
width:100%;
  }
`;
export const Logo = styled(motion.div)`
align-self:center;
justify-self:center;

  }
`;
export const Head = styled(motion.div)`
font-size:17px;
font-weight:800;
align-self:center;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;

justify-self:center;
color:black;
  
`;
export const Description = styled(motion.div)`
cursor:pointer;
justify-self:center;
align-self:center;
text-align:center;
padding:10px;
font-size:15px;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
}
  }
`;



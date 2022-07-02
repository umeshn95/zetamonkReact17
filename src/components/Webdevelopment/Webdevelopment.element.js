import styled from "styled-components";
import { motion } from "framer-motion";



export const Main = styled.div`
margin:0;
padding:80px 170px 0 170px;
box-size:border-box;
background:white;
height:100%;
width:100%;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
  height:100%;
  max-width:100%;
  padding:30px;
    }
  }
`;
export const Headergrid = styled.div`
display:grid;
grid-template-rows:1fr 1fr;
align-items: center;
justify-content:center;

`

export const Headings = styled.div`
font-size:55px;
font-weight:bold;
color:#5C33F6;
text-align:center;
@media only screen and (max-width:768px){
  font-size:30px;
}
`
export const Description = styled.div`
font-size:17px;
color:black;


`
export const Head = styled.div`
font-size:30px;
font-weight:bold;
color:black;
font-family: 'Arvo', serif;
text-align:center;
opacity:1;
margin-top:40px;
padding:10px;
@media screen and (max-width: 768px) {
}
`
export const MainGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-rows:0.2fr 1fr;
  grid-template-columns:1fr;
  padding:20px;
}
`
export const Subgrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
grid-template-rows:1fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
grid-template-rows:1fr 1fr 1fr 1fr;
}


`
export const SuperSubgrid = styled.div`
display:grid;
grid-template-rows:0.2fr 0.3fr 0.5fr;
align-items: center;
padding:25px;
`
export const Headc = styled.div`
font-size:25px;
font-weight:bold;
color:black;
opacity:0.6;

`
export const Logo = styled.div`
align-self:center;
justify-self:center;

`
export const TwoRowGrid = styled.div`
display:grid;
grid-template-rows:1fr 1fr;

`
export const Eightgrid = styled.div`
display:grid;
grid-template-columns:repeat(4, 1fr);
grid-template-rows:repeat(2, 1fr);
column-gap:10px;
row-gap:10px;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr 1fr;
  grid-template-rows:1fr 1fr 1fr 1fr;
  
  }
`
export const Devgrid = styled.div`
display:grid;
grid-template-rows:0.2fr 1fr;

`
export const Subdevgrid = styled.div`
display:grid;
grid-template-rows:1fr 1fr;
grid-template-columns:1fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
grid-template-rows:repeat(4,1fr);
  
  
  }
`
export const SuperSubgrid1 = styled.div`
display:grid;
grid-template-columns:0.5fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
grid-template-rows:0.5fr 1fr;
  
  
  }
`
export const SuperSubgrid2 = styled.div`
display:grid;
grid-template-columns:0.7fr 1fr;
column-gap:20px;
`




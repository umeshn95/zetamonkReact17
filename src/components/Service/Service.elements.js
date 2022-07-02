import styled from "styled-components";
import { motion } from "framer-motion";



export const Main = styled.div`
margin:0;
box-size:border-box;
background-color: white;
backdrop-filter: blur(30px);
  border: 1px solid rgba(0,0,0,0.09);
 padding:0;
width:100%;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
  height:100%;
  max-width:90%;
  padding:30px;
    }
  }
`;
export const MainGrid = styled.div`
display:grid;
grid-template-rows: 0.2fr 1fr;
row-gap:60px;
@media screen and (max-width: 768px) {

}
`;
export const Subgrid1 = styled.div`
display:grid;
grid-template-columns: 0.7fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;

}

}
`;

export const SupersubGrid1 = styled.div`
display:grid;
grid-template-rows: 0.1fr 1fr;
@media screen and (max-width: 768px) {

}
`;
export const Subgrid2 = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
column-gap:30px;
row-gap:30px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap:0px;
row-gap:10px;
}
`;
export const SuperSubgrid2 = styled.div`
display:grid;
grid-template-rows: 0.5fr 0.5fr 1fr;
box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.09), 0 10px 24px 0 rgba(0, 0, 0, 0.09);
row-gap:15px;
border-radius:5px;
cursor:pointer;
padding:40px;
width:370px;
height:290px;
@media screen and (max-width: 768px) {
padding:20px;
height:100%;
width:100%;

}
`;



export const Heading = styled.div`
color:blue;
max-width:80%
text-transform: uppercase;
font-size:13px;
font-weight:600;
@media screen and (max-width: 768px) {
}
`

export const Subheading = styled.div`
font-size:40px;
font-weight:800;
opacity:0.7;
@media screen and (max-width: 768px) {
font-size:30px;

}
`


export const Description = styled.div`
cursor:pointer;
font-size:25px;
max-width:80%;
padding:10px;
@media screen and (max-width: 768px) {
font-size:23px;
max-width:100%;
padding:0;
}
`

export const Head = styled(motion.div)`
color:blue;
text-transform: uppercase;
font-size:17px;
font-weight:600;
@media screen and (max-width: 768px) {

}
`
export const Desc = styled(motion.div)`
cursor:pointer;
font-size:17px;
opacity:0.7;
@media screen and (max-width: 768px) {
}

`


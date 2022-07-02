import styled from "styled-components";
import { motion } from "framer-motion";


export const Main = styled.div`
font-family: 'Arvo', serif;
color:white;
padding:0;
box-size:border-box;
// background:#6135A1;
background-color: #323232;

height:300px;
width:100%;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
z-index:-1;
display:none;

    }
  }
`;
export const MainGrid = styled.div`


display:grid;
grid-template-columns: 1fr 1fr 1fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;
export const Subgrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;

svg{
  height:550px;
  width:550px;
}

@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;
export const SuperSubgrid = styled.div`
display:grid;
text-align:center;
grid-template-rows: 0.5fr 1fr 0.5fr;
@media screen and (max-width: 768px) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr;
}
`;


import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

export const Main = styled.div`
margin-bottom:60px;
padding:0;
box-size:border-box;
background:white;
height:150px;
width:100%;
position:relative;
font-family: 'Arvo', serif;
@media screen and (max-width: 768px) {
  height:100%;
}
  }
`;
export const MainGrid = styled.div`
padding:60px;
display:grid;
grid-template-columns:repeat(6,1fr);
column-gap:40px;
@media screen and (max-width: 768px) {
grid-template-columns: 1fr 1fr;
grid-template-rows:1fr 1fr 1fr;
  padding:10px;
  column-gap:10px;
  row-gap:10px;
}
  }
`;



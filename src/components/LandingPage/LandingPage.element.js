

import styled from "styled-components";
import { motion } from "framer-motion";

export const Homepage1_main = styled.div`

  height: 100vh;
 width:100%;
  @media screen and (max-width: 991px) {
    height: 500px;
  }
  // &:after {
  //   position: absolute;
  //   background: url(${process.env.PUBLIC_URL + "/wave.svg"}) bottom no-repeat;
  //   background-size: cover;
  //   content: "";
  //   height: 323px;
  //   width: 100%;
  //   top: 100%;
  //   left: 0px;
  //   z-index: -1;
  //   @media screen and (max-width: 991px) {
  //     height: 100px;
  //   }
  // }
`;

export const Homepage1_sub = styled.div`
background: url('https://player.vimeo.com/external/533273133.hd.mp4?s=a87af4179a71721eb50c29401656a4b9c4a742b2&profile_id=174');

  display: grid;
  grid-template-columns: 0.7fr 0.8fr 0.2fr;
  padding: 60px;
  column-gap: 10px;
  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    padding: 0px;
  }
`;
export const Cloud = styled.div`
@media screen and (max-width: 991px) {
  .svg2{
    display:none;
  }
`;
export const Homepage1_content = styled.div`
  position: relative;
  top: 90px;
  diplay: grid;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  @media screen and (max-width: 991px) {
    padding:0;
  }
`;
export const Homepage1_image = styled(motion.div)`
  top: 60px;
  position: relative;
  height: 800px;
  width: 600px;
  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const Homepage1_heading = styled(motion.div)`
  color: white;
  text-shadow: 0 8px 16px rgb(47, 4, 4);
  font-size: 28px;
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  line-height: 1.35;
  padding: 60px 0 20px 60px;
  font-family: Proxima Nova, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu,
    Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  @media screen and (max-width: 991px) {
    font-size: 17px;
    line-height: 1.2;
    padding:20px 40px 20px 40px;
    width:100%;
  }
`;
export const Homepage1_phone = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }
`;
export const Phone1 = styled.div`
  justify-self: end;

  @media screen and (max-width: 991px) {
    justify-self: center;
  }
`;
export const Button1 = styled.div`
  display: grid;
  justify-self: end;
  align-self: end;
  padding: 0 0 0 60px;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 991px) {
    grid-template-columns: 1fr;
    justify-self: start;
    padding:20px 40px 20px 40px;

  }
`;
export const Button2 = styled(motion.button)`
  cursor: pointer;
  height: 55px;
  width: 200px;
  background: white;
  border-radius: 5px;
  color: black;
  border: none;

  font-weight: bold;
  &:hover {
    background: rgba(255, 255, 255, 0);
    color: white;
    border: 1px solid white;
  }
`;
export const Homepage1_description = styled(motion.div)`
  color: white;
  font-family: "Poppins", sans-serif;
  font-size: 43px;
  font-weight: lighter;
  padding: 0 60px 40px 60px;
 
  @media screen and (max-width: 991px) {
    font-size: 35px;
    padding:20px 40px 20px 40px;
    width:100%;
  }
`;


export const Video = styled.video`
@media screen and (max-width: 991px) {
display:none;
autoplay:autoplay;
peload:true;
volume:muted;
loop:loop;
}

`
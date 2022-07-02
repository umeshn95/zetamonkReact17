import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
 
  ImgWrapper,
  Img,
  
} from './InfoSection.elements';

function InfoSection({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  smallimg,

  alt,
  imgStart,
  start,
  AOS
}) {
  useEffect(() => {
    Aos.init({duration:2000});

}, [])
  return (
    <>
      <InfoSec lightBg={lightBg} data-aos={AOS} >
        <Container>
          <InfoRow imgStart={imgStart} >
            <InfoColumn>
              
            
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                
              
                <Heading lightText={lightText}>{headline}</Heading>
                
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to='/contactus'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
                {/* <Smallimg src={smallimg} alt={alt} /> */}
              </TextWrapper>
              
             
              
              

            </InfoColumn>
            

            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
            
          </InfoRow>
          
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection;

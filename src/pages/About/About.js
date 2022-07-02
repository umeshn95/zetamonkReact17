import React from 'react';
import { AboutSecret, Counter, Custom, InfoSection, TechStack,GoToTop, Aboutus, Whatwedo} from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';


function About() {
  return (
    <>
    
<Aboutus/>


    <AboutSecret></AboutSecret>
    <Whatwedo></Whatwedo>
    <Counter></Counter>

    <ScrollToTop></ScrollToTop>
    </>
  );
}

export default About;
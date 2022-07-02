import React from 'react';
import {  Counter, InfoSection} from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree, homeObjTwo,homeObjOne,homeObjFour} from './Data';


function Technology() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      

      <ScrollToTop></ScrollToTop>

    </>
  );
}

export default Technology;
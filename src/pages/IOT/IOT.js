import React from 'react';
import { Counter, Custom, InfoSection, TechStack } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree, homeObjTwo,homeObjOne } from './Data';

function IOT() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <Counter></Counter>
      <InfoSection {...homeObjTwo} />
      {/* <InfoSection {...homeObjOne} /> */}
      <TechStack></TechStack>
      <InfoSection {...homeObjOne} />
      <Custom></Custom>
<ScrollToTop></ScrollToTop>


    </>
  );
}

export default IOT;
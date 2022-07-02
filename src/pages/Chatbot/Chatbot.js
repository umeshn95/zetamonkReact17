import React from 'react';
import { Counter, InfoSection } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';
import {  homeObjThree,homeObjOne,homeObjTwo } from './Data';

function Chatbot() {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Chatbot;
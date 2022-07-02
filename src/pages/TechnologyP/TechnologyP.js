import React from 'react';
import {  Counter, GoToTop, InfoSection} from '../../components';
import {  homeObjThree, homeObjTwo,homeObjOne,homeObjFour} from './Data';


function TechnologyP() {
  return (
    <>
      <InfoSection {...homeObjOne} />

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />

      

<GoToTop></GoToTop>
    </>
  );
}

export default TechnologyP;
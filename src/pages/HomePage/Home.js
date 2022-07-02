import React from 'react';
// import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { Aboutus, Brand, CircularProgressba, LandingPage, Pricing, Pricing_card, Service, Whatwedo } from '../../components';
import Counteranimation from '../../components/Counteranimation/Counteranimation';
import ScrollToTop from '../../components/ScrollToTop';
import { pricingObj } from './Data';
import ReachOut from '../../components/Reachout/ReachOut'
import Newcardcomponent from '../../components/Newcard/Newcardcomponent';
import Newcard from '../../components/Newcard/Newcard';

function Home() {
  return (
    <>
      <LandingPage></LandingPage>
      


      {/* <Aboutus></Aboutus> */}
    
     {/* <Pricing_card></Pricing_card> */}
     {/* <Whatwedo></Whatwedo> */}

      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default Home;

import React from 'react';
import { Contact } from '../../components';

import { InfoSection } from '../../components';
import ScrollToTop from '../../components/ScrollToTop';

import { contactObj, homeObjThree } from './Data';

function SignUp() {
  return (
    <>
    <Contact {...contactObj}></Contact >
    {/* <Contact_details></Contact_details> */}
      <InfoSection {...homeObjThree} />
      <ScrollToTop></ScrollToTop>
    </>
  );
}

export default SignUp;

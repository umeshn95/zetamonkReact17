import React from 'react';
import './steps.css';
import { AiOutlineArrowRight } from "react-icons/ai";
const Stepscomponent = ({count,description,heading}) => {
  return <div className='stepscomponent_main'>
      <div className='stepscomponent_sub'>
          <div className='stepscomponent_sub1'></div>
          <div className='stepcomponents_count'>{ count}</div>
<div className='stepscomponent_discussion'>
              <div className='stepscomponent_discussion_heading'>{ heading}</div>
              <div className='stepscomponent_discussion_description'>{description }</div>
    <div className='stepscomponent_discussion_button'>Learn More <AiOutlineArrowRight/></div>
</div>
      </div>
  </div>
};

export default Stepscomponent;

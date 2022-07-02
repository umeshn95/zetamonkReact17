import React from 'react';
import design_dev from '../../images/design_development.svg';
import './desingdev.css'
const DesignDev = () => {
    return <div className='design_dev_main'>
        <div className='design_dev_sub'>
            <div className='design_dev_practices'>We follow best industry practices</div>
            <div className='design_dev_image'><img src={design_dev}></img></div>

      </div>
  </div>;
};

export default DesignDev;

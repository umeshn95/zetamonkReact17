import React from 'react';
import { AiOutlineCheck } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import './Newcard.css'
const Newcardcomponent = () => {
  return <div
 
  >
    <div className='newccardcomponenr_main_div' >
    <div className='newccardcomponent_sub_div'>
        <div className='newcardcomponrnt_basic_div'>basic <div className='newcard_popularchoice' style={{transform:'rotate(45deg)',maxWidth:'13px',fontSize:'8px',position:'absolute',top:'14px',right:'50px',color:'white',zIndex:'99'}}>popular choice</div></div>
        <div className='newcardcomponrnt_logo_div'><img  src='https://mitech.thememove.com/wp-content/uploads/2019/02/mitech-pricing-box-icon-01-90x90.png' style={{height:'80px', width:'80px',zIndex:'2'}}></img></div>
        <div className='newcardcomponrnt_price_div'><h6 className='card_dollar'>$</h6> <h6 className='card_price'>19</h6> <h6 className='card_period'> /mo</h6></div>
        <div className='newcardcomponrnt_button_div'><button className='newcard_button_getstarted'> Get Started</button></div>
        <div className='newcardcomponrnt_button_list'>
            
            <ul className='newcarrd_ul'>
                <li className="pricing_item"><div className='feature_text'> <IconContext.Provider value={{ size: 15}}><AiOutlineCheck className='newcard_check_icon'/></IconContext.Provider>03 projects</div></li>
                <li className="pricing_item"><div className='feature_text'> <IconContext.Provider value={{ size: 15}}><AiOutlineCheck className='newcard_check_icon'/></IconContext.Provider>Quality & Customer </div></li>
                <li className="pricing_item"><div className='feature_text'> <IconContext.Provider value={{ size: 15}}><AiOutlineCheck className='newcard_check_icon'/></IconContext.Provider>Try for free, forever!</div></li>
           
              
               
            </ul>
        </div>
    </div>
</div>
  </div>;
};

export default Newcardcomponent;

// automate script

import './styles.css'
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './st.scss'


const WebdevFaq = () => {
    return <div className='WebdevFaq_main'>
      
        <div className='WebdevFaq_sub'>
            <div className="WebdevFaq_faq">
            Frequently Asked <span style={{color:"#2176ff"}}>Questions</span>
        </div>
        <div className='WebdevFaq_faq_real'>
    <Simple1/>

        </div>
        </div>
  </div>;
};

export default WebdevFaq;



export function Simple1() {
    return (
      <div>
        <div class="card">
  <h1>Frequently Asked Questions</h1>
  
  <details class="warning">
    <summary>Facts and knowledge about COVID-19</summary>
    <p>Some text to be hidden.</p> 
    <p>Some text to be hidden.</p> 
    <p>Some text to be hidden.</p> 
    <p>Some text to be hidden.</p> 
  </details>
  
  <details class="info">
    <summary>For the public</summary>
    <p>Social distance, quarantine and isolation</p>
    <p>Hand hygiene, cough etiquette, cleaning and laundry</p>
    <p>When children have acute respiratory tract infections</p>
    <p>Risk groups and their relatives</p>
  </details>
  
  <details class="alert">
    <summary>Facts and knowledge about COVID-19</summary>
    <p>Some text to be hidden.</p> 
    <p>Some text to be hidden.</p> 
    <p>Some text to be hidden.</p> 
    <p>Some text to be hidden.</p> 
  </details>
</div>
      </div>
    );
  }
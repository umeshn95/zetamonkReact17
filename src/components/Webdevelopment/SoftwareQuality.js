import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import quality from '../../images/qualitymainicon.svg'
import {  qualityserv } from '../Reachout/reachoutdata'
function SoftwareQuality() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Full Cycle Software Quality Assurance Services' description='Ensure quality assurance to enhance customer experience.' point1='

Increase safety level of the application through robust quality assurance and testing.'  point2='
Implement software testing and quality control to save time and money.'
point3='
Assure software quality to create value for customers.' 
                    icon={quality}
                />
                <ReachOut description='UI/UX Design Service
We Offer' heading1= {qualityserv}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default SoftwareQuality
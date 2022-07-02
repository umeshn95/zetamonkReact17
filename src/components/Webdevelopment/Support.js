import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/mobileApp.svg'
import { mobileout, techsupport } from '../Reachout/reachoutdata'
import techs from '../../images/techsupport.svg'
function Support() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Technical Support Services' description='Get round the clock consumer-focused technical support services.' point1='
Get real-time technical support from issue to resolution 24/7.'  point2='

Technical support services specifically tailored to your needs.'
point3='

Save cost and increase customer satisfaction with enhanced technologies.' 
                    icon={techs}
                />
                <ReachOut description='UI/UX Design Service
We Offer' heading1= {techsupport}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Support
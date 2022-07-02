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
import { mobileout } from '../Reachout/reachoutdata'
function Appdevelopment() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Trusted Mobile App Development Company' description='Turn your custom mobile app development project into a success.' point1='
Benefit from the expertise of seasoned mobile app developers to build outstanding applications'  point2='
Leverage constant communication and collaboration to stay updated on every step of custom mobile app development services outsourcing.'
point3='
Entirely at your disposal, your dedicated team is set to reach goals without distractions.' 
                    icon={mobileapp}
                />
                <ReachOut description='UI/UX Design Service
We Offer' heading1= {mobileout}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Appdevelopment
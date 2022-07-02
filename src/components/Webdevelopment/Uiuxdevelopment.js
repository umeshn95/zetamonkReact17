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
import { uiux } from '../Reachout/reachoutdata'
import uix from '../../images/Uiux.svg'
function Uiuxdevelopment() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Top UI/UX Design Services' description='Get an eye catching-look and feel for your solutions with UI/UX design services.' point1='

Increase future product adoption by creating intuitive user experience design.'  point2='

Invest in user interface design for higher conversion rates and increased revenue.'
point3='
Boost customer retention by developing fit-for-purpose UI/UX design.' 
                    icon={uix}
                />
                <ReachOut description='Mobile App Development
Services We Offer' heading1= {uiux}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Uiuxdevelopment
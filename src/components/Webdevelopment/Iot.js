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
import { iotserv, mobileout } from '../Reachout/reachoutdata'
import iotimage from '../../images/iotmain_image.svg'

function Iot() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Internet of Things (IoT) Development Company' description='TAccelerating innovation for connected enterprises.' point1='

Stay ahead of the competition with flexible Internet of Things (IoT) development services.'  point2='
Leverage IoT to automate and streamline workflows.'
point3='
Harness the right IoT technology stack to build data-rich software solutions. Let’s Talk' 
                    icon={iotimage}
                />
                <ReachOut description='IoT Development Services We Offer' heading1= {iotserv}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Iot
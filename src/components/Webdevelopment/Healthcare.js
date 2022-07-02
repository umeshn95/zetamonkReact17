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
import HealthcareSoftwareDevelopmentServices from '../../images/Healthcare-Software-Development-Services.webp'
import { health, mobileout } from '../Reachout/reachoutdata'

function Healthcare() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Healthcare Software Development Services' description='InvoZone provides custom software development services to healthcare companies for improving healthcare services.' 
                    icon={HealthcareSoftwareDevelopmentServices}
                />
                <ReachOut description='Full Spectrum of Offshore Healthcare Software Development
and Development Services' heading1= {health}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Healthcare
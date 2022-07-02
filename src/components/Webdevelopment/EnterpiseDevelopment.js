import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import { enterpriseout } from '../Reachout/reachoutdata'
import enter from '../../images/ent.png'

function EnterpiseDevelopment() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Leading Enterprise Software Development Company' description='Tap in cutting edge enterprise software development to increase operational efficiency.' point1='
Develop custom enterprise software for industry-specific needs.'  point2='

Seamlessly integrate data with corporate systems and external applications.'
point3='

Cut through complexity with innovative enterprise software development.' 
                    icon={enter}
                />
                <ReachOut heading1= {enterpriseout} description='Enterprise Software
Development Services We Offer'   />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default EnterpiseDevelopment
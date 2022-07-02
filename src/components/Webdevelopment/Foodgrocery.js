import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/Financial-Software-Development-Services.webp'
import { food } from '../Reachout/reachoutdata'
function Foodgrocery() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='Grocery & Food Delivery App Development Services' description='Serve customers at their doorsteps with on-demand grocery app and food delivery app development' 
                    icon={mobileapp}
                />
                <ReachOut description='Custom Food and Grocery App Development
for Delightful Customer Experience' heading1= {food}  />
                <HireDeveloper />
                <WebdevProcessPage />
                {/* <DesignDev /> */}
                
                <WebdevFaq/>
            </div>
       </>
    )
}

export default Foodgrocery
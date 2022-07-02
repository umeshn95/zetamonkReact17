import React from 'react'
import DesignDev from '../DesignDev/DesignDev'
import HireDeveloper from '../HireDeveloper/HireDeveloper'
import { SimpleAccordion } from '../Navbar/Navbar'
import ReachOut from '../Reachout/ReachOut'
import './styles.css'
import WebdevFaq from './WebdevFaq'
import WebdevProcessPage from './WebdevProcessPage'
import WebdevserviceMain from './WebdevserviceMain'
import mobileapp from '../../images/about_us_hero.webp'
import { mobileout } from '../Reachout/reachoutdata'
function AboutUs() {

    return (
        <>
            <div>
                <div style={{width:'100%',height:'74px',background:'#2176FF',marginBottom:'50px'}}></div>
                <WebdevserviceMain heading='ZetaMonk - Your Go-to Technology Partner in Innovation' description='The only thing holding your business back is not being able to find the right software development partner. Let us take your problem off of your hands so you can focus on what really matters - running an efficient company! We help companies build innovative software with a team of world class engineers and an innovative approach to each project, so you can be confident in your success with us.' 
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

export default AboutUs
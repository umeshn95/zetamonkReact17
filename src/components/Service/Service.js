import React from 'react'
import { Description, Subgrid2,Heading, Main, MainGrid, MainImage, Shortheading, Subgrid1,SupersubGrid1, Subheading } from './Service.elements';
import Component from './Component';
import { IconContext } from 'react-icons/lib';
import { GrAnchor } from "react-icons/gr";
import { RiHomeWifiLine } from 'react-icons/ri';
import { BiBarChartAlt } from 'react-icons/bi';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscServerProcess } from "react-icons/vsc";
import { SiAdobeindesign } from "react-icons/si";
import { BsChat } from "react-icons/bs";
import ReachOut from '../Reachout/ReachOut';

function Service() {

    return (
        
            
        <Main>
        <ReachOut/>

           {/* <MainGrid>
            <Subgrid1>
                <SupersubGrid1>
                <div className='figure_plan'>OUR SERVICES</div>
               <div className='custom_software'>What We <span style={{color:'#086AD8'}}>Offer</span> for You</div>
                </SupersubGrid1>
                
               
                
            </Subgrid1>
            <Subgrid2>
                <Component links='/webdev' icon={<VscServerProcess></VscServerProcess>} head='Web Development' desc='Unique Web Design and Development,Our dedicated Team is continously improvising with time.' ></Component>
                <Component links='/chatbot' icon={<BsChat></BsChat>} head='Chatbot Development' desc='We Design Intelligent Chatbot With Instant Reply and Solve Business related problems.' ></Component>
                <Component links='/schoolmanage' icon={<SiAdobeindesign></SiAdobeindesign>} head='UI/UX Development' desc='We Provide Custom UI/UX Solutions, ZetaMonk has helped businesses with beautiful design.' ></Component>
                <Component links='/mobile' icon={<VscDeviceMobile></VscDeviceMobile>} head='Mobile Development' desc='Unique Web Design and Development,Our dedicated Team is continously thriving towards excellence.' ></Component>
                <Component links='/digitalmarket' icon={<BiBarChartAlt></BiBarChartAlt>} head='Digital Marketing' desc='We have digital marketing solutions for every Industries.' ></Component>
                <Component links='/iot' icon={<RiHomeWifiLine></RiHomeWifiLine>} head='Home Automation' desc='We Provide Complete Home Automation Services Ranging From Automatic Security to Automatic Appliance control.' ></Component>
               
            </Subgrid2>
            </MainGrid>  */}
        </Main>
    )
}

export default Service

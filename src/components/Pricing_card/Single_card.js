import React from 'react'
import { Single_card_button, Single_card_curriculum, Single_card_editor, Single_card_Glance, Single_card_main, Single_card_pacckage_desc, Single_card_package, Single_card_projects, Single_card_project_details, Single_card_tools, Single_card_tools1, Single_card_tools2, Single_card_tools3, Single_card_tools4, Single_card_tools5, Single_card_tools6 } from './Single_card.elements'

function Single_card(props) {
    return (
        <Single_card_main>
            <Single_card_package>
                {props.package}
            </Single_card_package>
            <Single_card_pacckage_desc>
                {props.pacckage_desc}
            </Single_card_pacckage_desc>
            <Single_card_Glance>
                {props.Glance}
            </Single_card_Glance>
            <Single_card_curriculum>
            {props.curriculum}
            </Single_card_curriculum>
            <Single_card_tools>
            {props.tools}
            </Single_card_tools>
            <Single_card_editor>
            <Single_card_tools1>
            <img src={props.logo1} style={{height:'25px',width:'25px',verticalAlign:'middle',borderRadius:'100px'}}></img> &nbsp;
            {props.tools1}
            </Single_card_tools1>
            <Single_card_tools2>
            <img src={props.logo2} style={{height:'25px',width:'25px',verticalAlign:'middle',borderRadius:'100px'}}></img> &nbsp;

            {props.tools2}
            </Single_card_tools2>
            <Single_card_tools3>
            <img src={props.logo3} style={{height:'25px',width:'25px',verticalAlign:'middle',borderRadius:'100px'}}></img> &nbsp;

            {props.tools3}
            </Single_card_tools3>
            <Single_card_tools4>
            <img src={props.logo4} style={{height:'25px',width:'25px',verticalAlign:'middle',borderRadius:'100px'}}></img> &nbsp;

            {props.tools4}
            </Single_card_tools4>
            <Single_card_tools5>
            <img src={props.logo5} style={{height:'25px',width:'25px',verticalAlign:'middle',borderRadius:'100px'}}></img> &nbsp;

            {props.tools5}
            </Single_card_tools5>
            <Single_card_tools6>
            <img src={props.logo6} style={{height:'25px',width:'25px',verticalAlign:'middle',borderRadius:'100px'}}></img> &nbsp;

            {props.tools6}
            </Single_card_tools6>
                
            </Single_card_editor>
            <Single_card_projects>
            {props.projects}
            </Single_card_projects>
            <Single_card_project_details>
            {props.project_details}
            </Single_card_project_details>
            <Single_card_button>
            {props.button}
                
            </Single_card_button>
        </Single_card_main>
    )
}

export default Single_card

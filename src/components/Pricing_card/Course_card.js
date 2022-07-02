import React, { useState } from 'react'
import { Course_card_cards, Course_card_class, Course_card_class_sub, Course_card_class_sub1, Course_card_class_sub2, Course_card_class_sub3, Course_card_main, Course_card_sub} from './Course_card.elements'
import Single_card from './Single_card';
import scratch from '../../images/scratch.PNG';
import codeorg from '../../images/code_org.png';
import empty from '../../images/empty.PNG';
import vscode from '../../images/vs_code.png';
import html from '../../images/html_css.png';
import applab from '../../images/App_lab.png';
import firebase from '../../images/firebase.png';
import thunkable from '../../images/thunkable.png';
import react_img from '../../images/react_img.png';
import game_lab from '../../images/game_lab.png';
import js_img from '../../images/js_img.png';
import nodejs_img from '../../images/nodejs_img.png';
import mongo from '../../images/mongo.png';




function Course_card({ChangeColor1,ChangeColor2,ChangeColor3}) {
   const [color1,setColor1]=useState(1)
   const [color2,setColor2]=useState()
   const [color3,setColor3]=useState()
   {color1?ChangeColor1=true:ChangeColor1=false}
   {color2?ChangeColor2=true:ChangeColor2=false}
   {color3?ChangeColor3=true:ChangeColor3=false}
    return (
   <Course_card_main>
       <Course_card_sub>
        <Course_card_class>
        <Course_card_class_sub>
        <Course_card_class_sub1 ChangeColor1={ChangeColor1} onClick={()=>{setColor1(true);setColor2(false);setColor3(false)}} >
        WEBSITE
        </Course_card_class_sub1 >
        
        <Course_card_class_sub2 ChangeColor2={ChangeColor2} onClick={() =>{setColor1(false);setColor2(true);setColor3(false)}}>
        CMS
        </Course_card_class_sub2>
        
        <Course_card_class_sub3 ChangeColor3={ChangeColor3} onClick={() =>{setColor1(false);setColor2(false);setColor3(true)}}>
        E-COMMERCE
        </Course_card_class_sub3>
        
        </Course_card_class_sub>
        </Course_card_class>
        <Course_card_cards>
        <Single_card
        package = 'BASIC'       
        pacckage_desc={color2?'CMS Website':color1?'Detailed Website':'E-commerce Website'}
        Glance='Website Features'
        
        curriculum={color2?'Complete Website plus CMS included,Creating and editing content,Workflows, reporting, and content organization,Security,':color1?'No. of Pages upto 5,Fixed layout design, Responsive Design,Testimonial,Social Media Button':'Custom Layout design,Search,Product Listing,Product Detail page,Payment gateway integration,Write a Review'}
        tools={color2?'TOOLS':color1?'TOOLS':'TOOLS & LANGUAGE'}
        logo1={color2?scratch:color1?scratch:react_img}
        logo2={color2?codeorg:color1?codeorg:html}
        logo3={color2?empty:color1?empty:empty}
        logo4={color2?empty:color1?empty:empty}
        logo5={color2?empty:color1?empty:empty}
        logo6={color2?empty:color1?empty:empty}
        tools1={color2?'Wordpress':color1?'Wordpress':'React'}
        tools2={color2?'Elementor':color1?'Elementor':'Django'}
       
        projects='SUPPORT'
        project_details={color2?'Lifetime Support':color1?'Lifetime Support':'Lifetime Support'}
        button={color2? 'Dig Deeper Now':color1?'Dig Deeper Now':'Dig Deeper Now'}
        />
        <Single_card
        package = 'STANDARD'        
        pacckage_desc={color2?'Standard CMS':color1?'Complete Website':'Standard E-commerce'}
        Glance='Website Features'

        
        curriculum={color2?'All feature in basic CMS plus,Multichannel scalability,Multilingual content capabilities ':color1?'All features in basic pack plus custom layout design,News Management,Blog Management,Brouchure Management':'All features of Basic package plus Advance Search,Wishlist,Product comparision,Discount coupon,Abandon Cart,Multiple language support'}
        tools={color2?'TOOLS':color1?'TOOLS':'TOOLS & LANGUAGE'}
        logo1={color2?scratch:color1?scratch:react_img}
        logo2={color2?codeorg:color1?codeorg:html}
        logo3={color2?applab:color1?applab:firebase}
        logo4={color2?vscode:color1?empty:empty}
        logo5={color2?empty:color1?empty:empty}
        logo6={color2?empty:color1?empty:empty}
        tools1={color2?'Wordpress':color1?'Wordpress':'React'}
        tools2={color2?'Elementor':color1?'Elementor':'Django'}
        tools3={color2?'Divi':color1?'Divi':'Mysql'}
        tools4={color2?'Plugins':color1?'':''}
       
        projects='SUPPORT'
        project_details={color2?'Lifetime Support':color1?'Lifetime Support':'Lifetime Support'}
        button={color2?'Dig Deeper Now':color1?'Dig Deeper Now':'Dig Deeper Now'}
        
        />
        <Single_card
        package = 'PREMIUM'        
        pacckage_desc={color2?'Advance CMS':color1?'Dynamic Website':'Advance E-commerce'}
        Glance='Website Features'
        
        curriculum={color2?'All features of Standard package plus,Content and commerce integration':color1?'All features of Standard package plus,SEO,Google Location Map,XML sitemap,Google Analytics ':'All features of Standard package plus,Multiple Currency support,Live Chat,customer feedback and Android Application'}

        tools={color2?'TOOLS & LANGUAGE':color1?'TOOLS':'TOOLS'}
        logo1={color2?scratch:color1?react_img:react_img}
        logo2={color2?codeorg:color1?nodejs_img:html}
        logo3={color2?applab:color1?thunkable:react_img}
        logo4={color2?vscode:color1?game_lab:mongo}
        logo5={color2?firebase:color1?mongo:firebase}
        logo6={color2?empty:color1?empty:js_img}
        tools1={color2?'Wordpress':color1?'Reactjs':'Reactjs'}
        tools2={color2?'Elementor':color1?'Nodejs':'Django'}
        tools3={color2?'Divi':color1?'Npm':'ReactN'}
        tools4={color2?'Plugins':color1?'GSAP':'Mongodb'}
        tools5={color2?'MySql':color1?'Mongodb':'Mysql'}
        tools6={color2?'':color1?'':'API'}
        projects='SUPPORT'
        project_details={color2?'Lifetime Support':color1?'Lifetime Support':'Lifetime Support '}
        button={color2?'Dig Deeper Now':color1?'Dig Deeper Now':'Dig Deeper Now'}
        
        />
  
        </Course_card_cards>
       </Course_card_sub>
   </Course_card_main>

            
    )
}

export default Course_card

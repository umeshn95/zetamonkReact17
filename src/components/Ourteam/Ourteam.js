import React from 'react'
import Heading from './Heading'
import { Main, Rowcolumn33 } from './Ourteam.element'
import Teamimage from './Teamimage'
import Teampeople from './Teampeople'
import vivek from '../../images/vivek.jpg';
import { FaLinkedin } from "react-icons/fa";
function Ourteam() {

    


    return (
        <Main>
           <Teamimage></Teamimage> 
           <Heading/>
           <Rowcolumn33>
              <a href='http://www.linkedin.com/in/vivek-sharma-a71873220'>  <Teampeople image={vivek} name='vivek sharma' designation='FrontEnd Developer' logo={<FaLinkedin/>}/></a>
      
              <a href='http://www.linkedin.com/in/vivek-sharma-a71873220'>  <Teampeople image={vivek} name='vivek sharma' designation='FrontEnd Developer' logo={<FaLinkedin/>}/></a>
      
              <a href='http://www.linkedin.com/in/vivek-sharma-a71873220'>  <Teampeople image={vivek} name='vivek sharma' designation='FrontEnd Developer' logo={<FaLinkedin/>}/></a>
      
              <a href='http://www.linkedin.com/in/vivek-sharma-a71873220'>  <Teampeople image={vivek} name='vivek sharma' designation='FrontEnd Developer' logo={<FaLinkedin/>}/></a>
      
              <a href='http://www.linkedin.com/in/vivek-sharma-a71873220'>  <Teampeople image={vivek} name='vivek sharma' designation='FrontEnd Developer' logo={<FaLinkedin/>}/></a>
      
              <a href='http://www.linkedin.com/in/vivek-sharma-a71873220'>  <Teampeople image={vivek} name='vivek sharma' designation='FrontEnd Developer' logo={<FaLinkedin/>}/></a>
      
              
               
            
           </Rowcolumn33>
        </Main>
    )
}

export default Ourteam

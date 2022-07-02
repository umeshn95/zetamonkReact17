import React,{useState} from 'react'
import {Data} from './Data';
import {IconContext} from 'react-icons';
import {AiOutlineArrowRight, AiOutlineArrowDown} from 'react-icons/ai'
import { AccordionSection, Container, Dropdown, Wrap } from './Whatwedo.element';

function Accordion() {
    const [clicked,setClicked] = useState(false)
   
    const toggle = index=>{
        if(clicked===index){
            return setClicked(null)
        }
        setClicked(index)
    }
    return (
        <IconContext.Provider value={{ color: "blue", size:'25' }}>
            <AccordionSection>

            <Container>
                {Data.map((item,index)=>{
return<>
<Wrap onClick={()=> toggle(index)} key={index}><h1>{item.question}</h1><span>{clicked===index?<AiOutlineArrowDown/>:<AiOutlineArrowRight/>}</span></Wrap>

{
    clicked===index?

<Dropdown><p>{item.answer}</p></Dropdown>:null
}
</>
                })}
            </Container>
            </AccordionSection>
      </IconContext.Provider>
    )
}

export default Accordion

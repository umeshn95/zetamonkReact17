import React from 'react';
import { Subgrid, SuperSubgrid } from "./Contacts";
import './Contact_details.css';
import { IoLocationOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
function Component(props) {



    return (  <IconContext.Provider
      value={{  size: '28' }}
    >
       <Subgrid>
    <IoLocationOutline></IoLocationOutline>
           <SuperSubgrid>
               <div className='state' >{props.state}</div>
               <div className='customer'>{props.customer}</div>
               <div className='description'>{props.description}</div>

               </SuperSubgrid>
       </Subgrid>
      
    </IconContext.Provider>
    )
}

export default Component

import React from 'react'
import Component from './Contact_details'
import { Main, MainGrid, Subgrid } from './Contacts'
import {motion} from 'framer-motion';
function Counteranimation() {
    return (
        <Main>
            <MainGrid>
                <Component state='USA'customer='35 Star Trek Drive,Tallahassee,	Florida,32311,contact: +16014635923' description=''></Component>
                <Component state='INDIA'customer='8th cross, Neeladri Nagar, Electronic City phase 1, Bangalore 560100' description=''></Component>
                <Component state='NETHERLAND' customer='Kruisbergseweg 66,Doetinchem,Gelderland,7009 BT,contact:+31687547785 ' description=''></Component>
            </MainGrid>
        </Main>
      
    )
}

export default Counteranimation

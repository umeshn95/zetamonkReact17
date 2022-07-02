import React from 'react'
import Component from './Component'
import { Main, MainGrid, Subgrid } from './Counteranimation.element'
import {motion} from 'framer-motion';
function Counteranimation() {
    return (
        <Main>
            <MainGrid>
                <Component state='HAPPY'customer='Clients' description='Our experience design arm, method, helps businesses'></Component>
                <Component state='SATISFACTION'customer='Services' description='Our experience design arm, method, helps to Satisfy Client'></Component>
                <Component state='RETENTION' customer='Customers' description='Our experience development team followed CLient Retention'></Component>
            </MainGrid>
        </Main>
      
    )
}

export default Counteranimation

import React,{useState,useEffect} from 'react';
import { Subgrid, SuperSubgrid } from "./Counteranimation.element";
import './Counteranimation.css'
function Component(props) {
const [progress,setProgress]=useState(0);
let interval;
    useEffect(() => {
       
         setInterval(() => {
             setProgress((progress) => progress + 1);
           }, 78);
        }, []);
        
            if(progress>92){
                setProgress(92);            
    
            }


    return (
        <Subgrid>
            {/* <div class="circular">
            <div class="inner"></div>
            <div class="outer"></div>
            <div class="numb">
               {progress}%
            </div>
            <div class="circle">
               <div class="dot">
                  <span></span>
               </div>
               <div class="bar left">
                  <div class="progress"></div>
               </div>
               <div class="bar right">
                  <div class="progress"></div>
               </div>
            </div>


           </div> */}

            <SuperSubgrid>
                <div className='state' >{props.state}</div>
                <div className='customer'>{props.customer}</div>
                <div className='description'>{props.description}</div>

                </SuperSubgrid>
        </Subgrid>
       
    )
}

export default Component

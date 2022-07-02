import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import "react-circular-progressbar/dist/styles.css";
import {Typography} from '@mui/material'
import './circularprogress.css'
function CircularProgressba() {
 
  return (
    
    <div className='circular_progress_main_div'> 
   <div style={{ width: 130, height: 130 }}>
     <Typography variant='h6' align='center'>Happy Client</Typography>
   <AnimatedProgressProvider
          valueStart={0}
          valueEnd={96}
          duration={5}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
   </div>
   <div style={{ width: 130, height: 130 }}>
   <Typography variant='h6' align='center'>Skilled Team</Typography>

   <AnimatedProgressProvider
          valueStart={0}
          valueEnd={91}
          duration={5}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
   </div>
   <div style={{ width: 130, height: 130 }}>
   <Typography variant='h6' align='center'>Finish Project</Typography>

   <AnimatedProgressProvider
          valueStart={0}
          valueEnd={100}
          duration={5}
          easingFunction={easeQuadInOut}
        >
          {(value) => {
            const roundedValue = Math.round(value);
            return (
              <CircularProgressbar
                value={value}
                text={`${roundedValue}%`}
                /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
                styles={buildStyles({ pathTransition: "none" })}
              />
            );
          }}
        </AnimatedProgressProvider>
   </div>
    </div>
    
  );
}

export default CircularProgressba;

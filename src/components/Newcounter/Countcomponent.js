import React,{useState,useEffect} from 'react'
import { IoContractOutline } from 'react-icons/io5';
import './newcounter.css'
const Countcomponent = () => {
    const [counts2,setCounts2] = useState(0)
    const [counts1,setCounts1] = useState(0)
    const [counts3,setCounts3] = useState(0)
    const [counts4,setCounts4] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [handleScroll]);





    const CountFunc1 = (min,max) =>{
        
        if(counts2>=min && counts2<max){
              setCounts2(counts2+1)
           
         }
          }
        
    const CountFunc2 = (min,max) =>{

        
        if(counts1>=min && counts1<max){
              setCounts1(counts1+1)
           
        }
          }
    const CountFunc3 = (min,max) =>{

        
        if(counts3>=min && counts3<max){
              setCounts3(counts3+1)
           
        }
          }
    const CountFunc4 = (min,max) =>{

        
        if(counts4>=min && counts4<max){
              setCounts4(counts4+1)
           
        }
          }
        
    
    
    useEffect(() => {

            setTimeout(() => {
                
                if(scrollPosition>600  ){
                    CountFunc2(0,120)
        
                }
                if(scrollPosition>600 ){
                    CountFunc1(0,32)
        
                }
                if(scrollPosition>600 ){
                    CountFunc3(0,73)
        
                }
                if(scrollPosition>600 ){
                    CountFunc4(0,81)
        
                }
                    
                }, 10);
        
               
       
       
    }, [counts1,counts2,counts3,counts4,scrollPosition])
    
    return (
        <div className='new_counter_main'>
           <div className='new_counter_sub1'><div className='newcounter'>{counts1}</div><div className='newcounter_heading'>HAPPY CLIENTS</div></div>
           <div className='new_counter_sub2'><div className='newcounter'>{counts2}</div><div className='newcounter_heading'>FINISHED PROJECTS</div></div>
           <div className='new_counter_sub3'><div className='newcounter'>{counts3}</div><div className='newcounter_heading'>SKILLED EXPERTS</div></div>
           <div className='new_counter_sub4'><div className='newcounter'>{counts4}</div><div className='newcounter_heading'>MEDIA POSTS</div></div>
        </div>
    )
}

export default Countcomponent


















































// import React,{useState,useEffect} from 'react'
// import { counts } from './data'

// const Countcomponent = () => {

//     const [count,setCount] = useState('0')

    

// useEffect(()=>{
//     let start = 0;
//     counts.map((c)=>
//    {
//        const end = parseInt(c.number.substring(0,3))
       
//        if (start === end) return;
//        let totalMilSecDur = parseInt(c.duration);
//        let increementTime = (totalMilSecDur/end) *1000;

//        let timer = setInterval(()=>{
//            start += 1;
//            setCount(String(start) + c.number.substring(3))
//            if(start === end ) clearInterval(timer)
//        },increementTime)
//    }
  
//     )


//     //find duration per increement


// },[counts])

//     return (
//         <div>
//             {counts.map((c)=>
//             <>
//             {c.label}:{c.number}
//             </>)}
//         </div>
//     )
// }

// export default Countcomponent
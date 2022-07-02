import styled from "styled-components";

export const Counterexperience = styled.div`
color: #fff;
padding:0px 110px 20px 110px;
display:block; 
position:relative; 
@media screen and (max-width: 768px) {
    padding:0;
    height:auto;
}


`

export const CounterMain = styled.div`
display:grid;
grid-template-columns:0.8fr 0.6fr 0.6fr 0.6fr 0.6fr;
@media only screen and (max-width:550px){
grid-template-columns:1fr;
grid-template-rows:0.8fr 0.6fr 0.6fr 0.6fr 0.6fr;



}
`

export const Countersub = styled.div`
padding:10px;
color: black;
font-size:26px;
align-self:center;
opacity:0.7;
;
`

export const Countersub1 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;
`
export const Countersub2 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;

`
export const Countersub3 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;

`
export const Countersub4 = styled.div`
display:grid;
grid-template-rows:0.8fr 0.3fr 0.3fr;

`
export const Counterlogo = styled.div`
justify-self:center;
align-self:center;
`

export const CounterNumber = styled.div`
font-size:30px;
font-weight:bold;
justify-self:center;
align-self:center;
color: #6EE348;
`

export const CounterType = styled.div`
font-size:23px;
justify-self:center;
align-self:center;
color: black;
opacity:0.6;
`



import styled from "styled-components";


export const Main = styled.div`
margin:0;
box-sizing:border-box;
padding:0;


`

export const Img = styled.img`
width: 100%;
height:750px;
@media screen and (max-width:768px){
    height:500px;
}
`
export const P = styled.p`
font-family: 'Arvo', serif;
letter-spacing: 2.5px;
line-height:120%;

position:absolute;
top:50%;
left:50%;
transform: translate(-50%,-50%);
font-size:3vw;
font-weight:600;
text-shadow: 4px 4px 8px #000000;
@media screen and (max-width:768px){
    top:40%;
left:50%;
transform: translate(-50%,-50%);
    font-size:25px;
    
}
`

export const Row2 = styled.div`
display:grid;
grid-template-rows: 1fr 1fr;
@media screen and (max-width:768px){
grid-template-rows: 0.1fr 0.1fr;

}
`

export const Sub = styled.div`
padding:60px;
@media screen and (max-width:768px){
    padding:40px;
}
`
export const Head = styled.div`
font-size:40px;
font-weight:600;
text-align: center;
font-family: 'Arvo', serif;
letter-spacing: 2.5px;

`
export const Description = styled.div`
font-size:19px;
padding:10px 60px 10px 60px;
text-align: center;
line-height:150%;
@media screen and (max-width:768px){
    padding:10px;
    text-align: normal;
}
`
export const Row3 = styled.div`
display:grid;
grid-template-rows: 1fr 0.2fr 0.1fr;
text-align: center;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.09), 0 5px 12px 0 rgba(0, 0, 0, 0.09);
padding:30px;
`
export const Rowcolumn33 = styled.div`
display:grid;
grid-template-rows: 1fr 1fr;
grid-template-columns:1fr 1fr 1fr;
row-gap:100px;
column-gap:100px;
padding:0 200px 90px 200px;
cursor:pointer;

@media screen and (max-width:768px){
grid-template-columns:1fr;
grid-template-rows:repeat(6, 1fr);
row-gap:40px;
column-gap:10px;
padding:30px;

}
`

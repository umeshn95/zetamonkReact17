import styled from 'styled-components';



export const Single_card_main = styled.div`
display:grid;
grid-template-rows:0.1fr 0.1fr 0.1fr 0.3fr 0.3fr 0.1fr 0.1fr 0.1fr 0.1fr 0.1fr 0.2fr 0.2fr;
padding:20px;
border-radius:20px;
background-color: rgba(255,255,255,0.1);
border: 1px solid silver;
backdrop-filter: blur(30px);
@media screen and (max-width: 768px) {
 
    grid-template-columns: 1fr;
    padding:0;
  }
}


`
export const Single_card_package = styled.div`
padding:10px;
color: #54e346;
letter-spacing: 2px;
font-size: 14px;
opacity: .9;
font-weight: 700;
`
export const Single_card_pacckage_desc = styled.div`
padding:10px;
font-family: system-ui;
font-size: 23px;
font-weight: 600;


`
export const Single_card_Glance = styled.div`
padding:10px;
font-weight: 800;
text-transform: uppercase;
font-size: 13px;
font-family: system-ui;


`
export const Single_card_curriculum = styled.div`
padding:10px;
color: hsla(0,0%,50.2%,.7);
font-size: 14px;
font-weight: 600;
font-family: system-ui;

`
export const Single_card_tools = styled.div`
padding:10px;
font-weight: 800;
text-transform: uppercase;
font-size: 13px;
letter-spacing: 2.3px;
font-family: system-ui;
`
export const Single_card_editor = styled.div`
display:grid;
grid-template-rows: repeat(3,0.2fr);
grid-template-columns: repeat(3,1fr);


`
export const Single_card_tools1 = styled.div`
padding:10px;
font-size: 13px;
color: hsla(0,0%,50.2%,.7);
letter-spacing: -.2px;
font-weight: 600;
font-family: cursive;

  }
`
export const Single_card_tools2 = styled.div`
padding:10px;
font-size: 13px;
color: hsla(0,0%,50.2%,.7);
letter-spacing: -.2px;
font-weight: 600;
font-family: cursive;
`
export const Single_card_tools3 = styled.div`
padding:10px;
font-size: 13px;
color: hsla(0,0%,50.2%,.7);
letter-spacing: -.2px;
font-weight: 600;
font-family: cursive;
`
export const Single_card_tools4 = styled.div`
padding:10px;
font-size: 13px;
color: hsla(0,0%,50.2%,.7);
letter-spacing: -.2px;
font-weight: 600;
font-family: cursive;
`
export const Single_card_tools5 = styled.div`
padding:10px;
font-size: 13px;
color: hsla(0,0%,50.2%,.7);
letter-spacing: -.2px;
font-weight: 600;
font-family: cursive;
`
export const Single_card_tools6 = styled.div`
padding:10px;
font-size: 13px;
color: hsla(0,0%,50.2%,.7);
letter-spacing: -.2px;
font-weight: 600;
font-family: cursive;
`
export const Single_card_projects = styled.div`
padding:10px;
font-weight: 800;
text-transform: uppercase;
font-size: 13px;
letter-spacing: 2.33px;
font-family: system-ui;

`
export const Single_card_project_details = styled.div`
padding:10px;
color: hsla(0,0%,50.2%,.7);
font-size: 14px;
font-weight: 600;
font-family: system-ui;

`
export const Single_card_button = styled.button`
top:25px;
position:relative;
justify-self:center;
width: 230px;
border-radius: 999px;
background-color:#3DB2FF ;
font-family: system-ui;

border-width: 0vw;
color: white;
font-weight: 700;
font-size: 15px;
outline: none;
cursor:pointer;
text-shadow: 0 8px 16px #3DB2FF;
height:45px;
&:after{
    content: '';
    width: 30px; height: 30px;
    border-radius: 100%;
    border: 23px solid #3DB2FF;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 0.5s infinite;
}
&:hover{
    box-shadow: 0 0 0 2px #3DB2FF;
}

  outline: none;
  cursor:pointer;
 
}
&:hover:after{
    animation:none;
    display:none;
}
    
@keyframes ring {
    0% {
      width: 2px;
      height: 2px;
      opacity: 1;
    }
    100% {
      width: 210px;
      height: 1px;
      opacity: 0;
    }
  }
}

`


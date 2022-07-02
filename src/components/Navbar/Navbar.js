import React, { useState, useEffect } from "react";
import "./navbar.scss";
// import style mui
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import golo from "../../images/logozeta.svg";
import iconwebdev from '../../images/icon3.svg'

// mui 

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// import style mui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//icons

import { GoChevronDown } from "react-icons/go";
import { AiOutlineSearch } from "react-icons/ai";
import { reachout } from "../Reachout/reachoutdata";
import MainBanner from "../MainBanner/MainBanner";
import   Grid  from "@mui/material/Grid";
import {
  companydata,
  contentdata,
  dedicateddata,
  industrydata,
  navbardata,
  servicedata,
} from "./data";
import  {Link}  from "react-router-dom";



const Navbar = () => {
  // scroll component start
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navcolor, setNavcolor] = useState(false);

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

  const handleColor = () => {
    setNavcolor(true);
  };
  // scroll componrnt end

  useEffect(() => {
    if (scrollPosition > 10) {
      handleColor(true);
    }
  }, []);

  // scroll color

  //  console.log(scrollPosition)

  console.log(navcolor);

  const [disp, setDisp] = useState(false);
  const [service, setService] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [dedicated, setDedicated] = useState(false);
  const [contenthub, setContenthub] = useState(false);
  const [company, setCompany] = useState(false);
  const [cross, setCross] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const useStyle = makeStyles((theme) => ({
    contactus: {
      background: "white",
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50rem",
      cursor: "pointer",
      padding: "10px 10px",
    },
    headlogo: {
      paddingTop: "3px",
      paddingLeft: "40px",
      fontSize: "30px",
    },
    pricing: {
      paddingTop: "8px",
    },
  }));

  const classes = useStyle();

  const DispFunc = () => {
    setTimeout(() => {
      setDisp(true);
    }, 500);
  };
  console.log(navcolor);

  return (
    <>
      {matches ? (
        <>
         <div
          className="header_main_responsive"
          style={{ background: scrollPosition > 1 ? "#2176FF" : "transparent",zIndex:'999'}}
        >
            <Link to='/' onClick={()=>setCross(false)} style={{textDecoration:'none',color:'white'}} >
          
            <div className="header_main_responsive_logo">
      
            <span style={{ fontWeight: "700", fontSize: "24px" }}>
              Zeta
            </span>
            <span style={{ fontWeight: "400", fontSize: "24px" }}>monk</span>
          </div>
            </Link>
          <div
            className="header_main_responsive_tab"
            onClick={() => setCross(!cross)}
          >
            
              <div className="header_main_responsive_tab_span">
             
              <span className = {cross?'header_main_responsive_tab_span12':"header_main_responsive_tab_span1"}></span>
              <span className = {cross?'header_main_responsive_tab_span22':"header_main_responsive_tab_span2"}></span>
              <span className = {cross?'header_main_responsive_tab_span32':"header_main_responsive_tab_span3"}></span>
            </div>{" "}
        
            
         
          </div>
          </div>
         { cross? <div className='header_main_responsive_tab_side_drawer'  style={{ height: '100vh', width: "100%",position:'fixed',marginTop:'80px',background:'white',zIndex:'999' }}>
          
          
         <div>
        <div class="card">
  
  <details className="warning">
    <summary>Services</summary>
    <Link onClick={()=>setCross(!cross)} to='/webdev' style={{textDecoration:"none"}}><p>Web Design and Development Services</p> </Link>
    <Link onClick={()=>setCross(!cross)} to='/appdev' style={{textDecoration:"none"}}> <p>Mobile App Development</p> </Link>
    <Link onClick={()=>setCross(!cross)} to='/enterprisedevelopment' style={{textDecoration:"none"}}>  <p>Enterprise Software Development.</p>  </Link>
    <Link onClick={()=>setCross(!cross)} to='/Uiux' style={{textDecoration:"none"}}>   <p>UI/UX Design</p>  </Link>
    <Link onClick={()=>setCross(!cross)} to='/qualityAssurance' style={{textDecoration:"none"}}>   <p>Software Quality Assurance</p>   </Link>
    <Link onClick={()=>setCross(!cross)} to='/support' style={{textDecoration:"none"}}>    <p>Technical Support</p>    </Link>
    </details>
  
    <details className="info">
    <summary>Industries</summary>
    <Link onClick={()=>setCross(!cross)} to='/ecommerce' style={{textDecoration:"none"}}><p>E-commerce</p> </Link>
    <Link onClick={()=>setCross(!cross)} to='/healthcare' style={{textDecoration:"none"}}> <p>Healthcare</p> </Link>
     <Link onClick={()=>setCross(!cross)} to='/education' style={{textDecoration:"none"}}>   <p>Education</p>  </Link>
    <Link onClick={()=>setCross(!cross)} to='/food' style={{textDecoration:"none"}}>    <p>Food & Grocery</p>    </Link>
    </details>
    <Link to='/aboutus' onClick={()=>setCross(!cross)} style={{textDecoration:"none"}}>
  <details class="alert">
   <summary>About Us</summary>
    
                  </details>
                  </Link>
</div>
      </div>  



         <Link onClick={()=>setCross(false)} style={{textDecoration:"none",cursor:"pointer"}} to='/contact'>  <div className='header_main_responsive_tab_button'> <button>Contact Us</button></div></Link>
          </div>:<></>}
        </>
      ) : (
        <header
          className="header_main_blue"
          style={{
            zIndex: "999",
            position: "fixed",
            background: scrollPosition > 1 ? "#2176FF" : "transparent",
          }}
        >
          <header className="header_sub_blue">
            <Grid container>
              <Grid
                item
                sm={2.8}
                md={3.2}
                lg={3.2}
                className={classes.headlogo}
              >
                  <Link to='/' onClick={()=>setCross(false)} style={{textDecoration:'none',color:'white'}}>
                  <span style={{ fontWeight: "700" }}>Zeta</span>{" "}
                <span style={{ fontWeight: "400" }}>monk</span>
                  </Link>
              </Grid>
              <Grid
                item
                sm={1}
                lg={1}
                md={1}
                className={classes.pricing}
                onMouseEnter={() => setService(true)}
                onMouseLeave={() => setService(false)}
              >
                Services{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="Header-module--alignHeaderDropIcon--3c94O"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </Grid>
              <Grid
                item
                sm={1}
                md={1}
                lg={1}
                onMouseEnter={() => setIndustries(true)}
                onMouseLeave={() => setIndustries(false)}
                className={classes.pricing}
              >
                Industries{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="Header-module--alignHeaderDropIcon--3c94O"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </Grid>
              <Grid
                item
                sm={2.3}
                md={1.9}
                lg={1.4}
                onMouseEnter={() => setDedicated(true)}
                onMouseLeave={() => setDedicated(false)}
                className={classes.pricing}
              >
                About Company 
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="Header-module--alignHeaderDropIcon--3c94O"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </Grid>
              <Grid
                item
                sm={1.3}
                md={1.2}
                lg={1.2}
                className={classes.pricing}
                onMouseEnter={() => setContenthub(true)}
                onMouseLeave={() => setContenthub(false)}
              >
                Blogs Hub{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="Header-module--alignHeaderDropIcon--3c94O"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </Grid>
              <Grid
                item
                sm={1}
                md={1}
                lg={1}
                className={classes.pricing}
                onMouseEnter={() => setCompany(true)}
                onMouseLeave={() => setCompany(false)}
              >
                Career{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 320 512"
                  class="Header-module--alignHeaderDropIcon--3c94O"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                </svg>
              </Grid>
              <Grid item sm={1} md={1} lg={1} className={classes.pricing}>
                Pricing{" "}
              </Grid>

              <Grid item sm={1.5} md={1} lg={1}>
                  <Link to='/contact' style={{textDecoration:"none",color:'black',background: "white",
      color: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50rem",
      cursor: "pointer",
      padding: "10px 10px",}}>
                Contact Us
                    
              </Link>
                </Grid>
            </Grid>
          </header>
        </header>
      )}

      {service ? (
        <>
          <div
            onMouseEnter={() => setService(true)}
            onMouseLeave={() => setService(false)}
            className="service_hover"
          >
            <Grid container spacing={2}>
              {servicedata.map((n) => (
                <Grid sm={4} item md={4} lg={4}>
                  <Link style={{textDecoration:'none'}} to={n.link}>
                  <div onClick={()=> setService(false) } className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                  </Link>
                  <Divider />
                </Grid>
              ))}
            </Grid>
            <div className="view_all_services">
              <button className="view_all_services_button">View All</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {industries ? (
        <>
          <div
            onMouseEnter={() => setIndustries(true)}
            onMouseLeave={() => setIndustries(false)}
            className="industry_hover"
          >
            <Grid container spacing={3}>
              {industrydata.map((n) => (
                <Grid sm={4} md={4} item lg={4}>
                   <Link style={{textDecoration:'none'}} to={n.link}>
                  <div onClick={() => setIndustries(false)} className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                  </Link>
                  <Divider />
                </Grid>
              ))}
            </Grid>
            <div className="view_all_services">
              <button className="view_all_services_button">View All</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
      {dedicated ? (
        <>
          <div
            onMouseEnter={() => setDedicated(true)}
            onMouseLeave={() => setDedicated(false)}
            className="dedicated_hover"
          >
            <Grid container spacing={3}>
              {dedicateddata.map((n) => (
                <Grid sm={4} item md={4} lg={4}>
                   <Link style={{textDecoration:'none'}} to={n.link}>

                  <div onClick={() => setDedicated(false)} className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                    <Divider />
                    </Link>
                </Grid>
              ))}
            </Grid>
            <div className="view_all_services">
              <button className="view_all_services_button">View All</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
     
     
    </>
  );
};

export default Navbar;

// <div className='navbar_mitech' onMouseEnter={()=>setDisp(false)}>
//         <div className='navbar_mitech_container' onMouseEnter={()=>setDisp(false)}>
//           <div className='navbar_mitech_list' onMouseEnter={()=>setDisp(false)}>
//             <div className='navbar_home' onMouseEnter={()=>setDisp(false)}>Home</div>
//             <div className='navbar_service' onMouseEnter={()=>DispFunc()}  >Services <GoChevronDown style={{alignSelf:'end'}}/></div>
//             <div className='navbar_home' onMouseEnter={()=>setDisp(false)}>About</div>
//             <div className='navbar_home' onMouseEnter={()=>setDisp(false)}>Contact Us</div>
//             <div className='navbar_home' onMouseEnter={()=>setDisp(false)}>Contact Us</div>
//             <div className='navbar_home' onMouseEnter={()=>setDisp(false)}>Blog</div>
//             <div className='navbar_search' onMouseEnter={()=>setDisp(false)}><input type='text' placeholder='Search...' className='search_input'></input> <AiOutlineSearch style={{position:'absolute',marginLeft:'300px',marginTop:'4px',cursor:'pointer'}}></AiOutlineSearch> </ div>
//           </div>

//         </div>
//       </div>
//        {disp? <div onMouseLeave={()=>setDisp(false)} className='services_hover_div'>{reachout.map((r,i)=><ul className='service_hover_heading'><li><a>{r.heading}</a></li></ul>)}</div>:''}

// <AppBar position='relative' style={{ height: '50px' }}>
// <Grid container  >
//   <Grid item lg={1}></Grid>

//   <Grid item lg={4}>
//     <List className={classes.service}>
//       {navdata.map((n) => <Link style={{textDecoration:'none',color:'white'}} to={n.link}>
//         <ListItem style={{
//         backdropFilter: 'blur(12px)',
//         color: 'rgba(black, 0.2)'
//       }}>{n.name}</ListItem>
//       </Link>)}
//     </List>

//   </Grid>
//   <Grid item lg={4}></Grid>
//   <Grid item lg={3}><input className='search_input' type='search' placeholder='Search...'></input> <FaSearch style={{ position: 'absolute', marginLeft: '234px', marginTop: '18px', cursor: 'pointer' }} /></Grid>
// </Grid>

// </AppBar>

export function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{paddingTop:'15px'}}
        >
          <Typography >Service</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Grid container spacing={2}>
              {servicedata.map((n) => (
                <Grid sm={4} item md={4} lg={4}>
                  <div className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                </Grid>
              ))}
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Industries</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={3}>
              {industrydata.map((n) => (
                <Grid sm={4} md={4} item lg={4}>
                  <div className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                </Grid>
              ))}
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dedicated Developers</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container spacing={3}>
              {dedicateddata.map((n) => (
                <Grid sm={4} item md={4} lg={4}>
                  <div className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                </Grid>
              ))}
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Content Hub</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container direction="column" spacing={3}>
              {contentdata.map((n) => (
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <div className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                </Grid>
              ))}
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Company</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Grid container direction="column" spacing={3}>
              {companydata.map((n) => (
                <Grid item sm={4} md={4} lg={4}>
                  <div className="inner_services_tab">
                    {" "}
                    <img src={n.icon}></img> {n.text}
                  </div>
                </Grid>
              ))}
            </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Pricing</Typography>
        </AccordionSummary>
        <AccordionDetails>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
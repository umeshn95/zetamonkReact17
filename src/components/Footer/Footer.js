import React,{useState} from 'react';
import {Grid, Typography} from '@mui/material'
import './footerdiv.css'
import { Box } from '@mui/system';
import golo from '../../images/logozeta.svg'
import { AiFillFacebook } from "react-icons/ai";
import { IconContext } from 'react-icons/lib';
import Calling from '../Calling/Calling';
import Furtherinformation from '../Furtherinformation/Furtherinformation';
import footerbackground from '../../images/footer_background.svg'
import email from '../../images/emailus.svg'
// mui responsive media query
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {Link} from 'react-router-dom'

function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
  
  <>
{/* <Furtherinformation/> */}
{/* <Calling/> */}

    <div className='footer_main_div'>
    <div className='footer_main_sub'>
    <Grid container spacing={2}>
      <Grid item align={matches?'center':'left'}  xs={12} md={4} lg={2.5}>
        <div className='footer_div_logo'>   <Box style={{display:'flex',alignItems:matches?'center':'start',justifyContent:matches?'center':'flex-start'}}>
              <img
            src={golo}
            style={{height:'50px',width:'50px'}}
            alt='logo'
            />
             
            <Typography variant='h6' style={{color:'#2541B2',justifySelf:'center',alignSelf:'center'}}>Zeta</Typography>
            <Typography variant='h5' style={{color:'#E5D549',justifySelf:'center',alignSelf:'center'}}>Monk</Typography>
              </Box ></div>
        <div className='footer_div_address'>8th Cross Rd, Neeladri Nagar, Electronics City Phase 1, Doddathoguru, Bengaluru, Karnataka 560100

</div>
        <div className='footer_div_address2'>
contact@zetamonk.com
</div>
        <div className='footer_div_phone_number'>(+91)8871501463 </div>
        <div className='footer_div_mailid'>www.zetamonk.com
</div>
      </Grid>
      <Grid item xs={6} md={2} lg={1.7}>
         <div className='footer_div_service_heading_head'>IT Services</div> 
         <Link to='/webdev' style={{textDecoration:'none', color:"white"}}><div className='footer_div_service_heading'>Web Design</div> </Link>
         <Link to='/Uiux' style={{textDecoration:'none', color:"white"}}><div className='footer_div_service_heading'>Ui/Ux Development </div>  </Link>
         <Link to='/appdev' style={{textDecoration:'none', color:"white"}}><div className='footer_div_service_heading'>Mobile App</div>   </Link>
         
         <Link to='/enterprisedevelopment' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>Enterprise</div>   </Link>
         <Link to='/qualityAssurance' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>software Quality</div>    </Link>
         
         
       
         
      
      
      </Grid>
      <Grid item xs={6} md={2} lg={1.7}>
              <div className='footer_div_service_heading_head'>Industies</div> 
         
              <Link to='/ecommerce' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>E-commerce</div>     </Link>
              <Link to='/healthcare' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>Healthcare</div>   </Link>
              <Link to='/education' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>Education</div>   </Link>
              <Link to='/food' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>Food & Grocery</div>   </Link>
         
        
      


      </Grid>
      <Grid item xs={6} md={2} lg={1.7}>

      <div className='footer_div_service_heading_head'>About Us</div> 
      <Link to='/contact' style={{textDecoration:'none', color:"white"}}>  <div className='footer_div_service_heading'>Contact Us</div>   </Link>
         
         <div className='footer_div_service_heading'>Career</div> 
         <div className='footer_div_service_heading'>About Us</div> 
         <div className='footer_div_service_heading'>Pricing</div> 
      
      </Grid>
            <Grid item xs={6} md={2} lg={3.7} style={{marginTop:'20px'}} >
              <Grid container align='left' justifySelf='start' spacing={2} >
                <Grid item xs={12}  md={12} sm={12} lg={12} xl={12}><img style={{height:'30px',width:'30px'}} src={email}></img> &nbsp; <span style={{fontWeight:'600',fontSize:'20px'}}>Email Us</span></Grid>
                <Grid item xs={2} md={12} sm={12} lg={12} xl={12} style={{ textAlign:'left'}} >
                  { matches? 'sales@zetamonk.com':'sales@zetamonk.com.com|biz@zetamonk.com' }</Grid>
              </Grid>

{/* 
    <div className='google_play_button'>google play</div>
    <div className='google_play_button'>google play</div> */}
      
      </Grid>
     

    </Grid>
   <div className='footer_div_copyright'>
   <Grid container>
      <Grid item md={9}  lg={9}>© 2022 ZetaMonk. All Rights Reserved</Grid>
      <Grid item md={3} lg={3} style={{display:'flex',gap:'20px',alignItems:'flex-start'}}><div className='footer_facebook'> <AiFillFacebook  className='footer_facebook_icon' 
     ></AiFillFacebook></div>
     
     <div className='footer_facebook'> <AiFillFacebook  className='footer_facebook_icon' 
     ></AiFillFacebook></div>
   
     
     
     
     </Grid>
    </Grid>
   </div>
    </div>
    
    </div>
    </>
  );
}

export default Footer;




{/* <>
      <FooterContainer show={show}>
        {/* <FooterSubscription>
        <FooterSubHeading>
          Connect Us for exclusive Pricing and to receive the latest Development news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput  type='email' placeholder='Your Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <Button onClick={subscribe} fontBig>Subscribe</Button>
          </Form>
      </FooterSubscription> */}
        // <FooterLinksContainer>
        //   <FooterLinksWrapper>
        //     <FooterLinkItems>
        //       <FooterLinkTitle>
        //         {" "}
        //         <img
        //           src={zetalogo}
        //           style={{ height: "25px", width: "25px" }}
        //         ></img>
        //         <span style={{ color: "#867AE9" }}>Zeta</span>
        //         <span style={{ color: "#E5D549", marginLeft: "5px" }}>
        //           Monk
        //         </span>
        //       </FooterLinkTitle>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         ZetaMonk is a boutique digital transformation consultancy &
        //         software development company that provides IT solutions.We have
        //         Clients All over the world.
        //       </FooterLink>
        //     </FooterLinkItems>
        //     <FooterLinkItems>
        //       <FooterLinkTitle>Contacts</FooterLinkTitle>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         <h4>
        //           <GoLocation />
        //           Address:
        //         </h4>
        //         8th cross, Neeladri Nagar, Electronic City phase 1, Bangalore
        //         560100, INDIA
        //       </FooterLink>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         <h4>
        //           <AiOutlineMail />
        //           Email:
        //         </h4>
        //         contact@zetamonk.com
        //       </FooterLink>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
               
        //       </FooterLink>
        //     </FooterLinkItems>
        //   </FooterLinksWrapper>
        //   <FooterLinksWrapper>
        //     <FooterLinkItems>
        //       <FooterLinkTitle>About Us</FooterLinkTitle>
        //       <FooterLink to="/about">
        //         <FaPushed />
        //         About us
        //       </FooterLink>
        //       <FooterLink to="/about">
        //         {" "}
        //         <FaPushed />
        //         What We Do
        //       </FooterLink>
        //       <FooterLink to="/about">
        //         {" "}
        //         <FaPushed />
        //         Who We Are
        //       </FooterLink>
        //       <FooterLink to="/contactus">
        //         {" "}
        //         <FaHeadset />
        //         Contact Us
        //       </FooterLink>
        //     </FooterLinkItems>
        //     <FooterLinkItems>
        //       <FooterLinkTitle>Services</FooterLinkTitle>
        //       <FooterLink to="/webdev">
        //         <FaBuffer />
        //         Web Development
        //       </FooterLink>
        //       <FooterLink to="/chatbot">
        //         <FaComment />
        //         Chatbot Development
        //       </FooterLink>
        //       <FooterLink to="/schoolmanage">
        //         <FaBuffer />
        //         UI/UX Design
        //       </FooterLink>
        //       <FooterLink to="/mobile">
        //         <FaBuffer />
        //         Mobile Development
        //       </FooterLink>
        //       <FooterLink to="/digitalmarket">
        //         <FaSkyatlas />
        //         Digital Marketing
        //       </FooterLink>
        //     </FooterLinkItems>
        //     <FooterLinkItems>
        //       <FooterLinkTitle>Have Quetions?</FooterLinkTitle>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         <GiUsaFlag />
        //         <span>USA</span> +1 601-463-5923{" "}
        //       </FooterLink>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         {" "}
        //         <FaPushed />
        //         <span>Netherland</span>+31 687-547-785
        //       </FooterLink>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         {" "}
        //         <GiIndianPalace />
        //         <span>India</span>+91 954-042-4976
        //       </FooterLink>
        //       <FooterLink
        //         style={{
        //           cursor: "text",
        //           fontSize: "15px",
        //           color: "currentColor",
        //           textDecoration: "none",
        //         }}
        //       >
        //         {" "}
        //         <h4>
        //           <AiOutlineMail />
        //           Email:
        //         </h4>
        //         biz@zetamonk.com
        //       </FooterLink>
              
        //     </FooterLinkItems>
        //   </FooterLinksWrapper>
        // </FooterLinksContainer>
        // <SocialMedia>
        //   <SocialMediaWrap>
        //     <SocialLogo to="/">
        //       <img
        //         src={zetalogo}
        //         style={{ height: "50px", width: "50px" }}
        //       ></img>

        //       <span style={{ color: "#867AE9" }}>Zeta</span>
        //       <span style={{ color: "#E5D549", marginLeft: "5px" }}>Monk</span>
        //     </SocialLogo>
        //     <WebsiteRights>ZetaMonk © 2021</WebsiteRights>
            {/* <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                'https://www.youtube.com/results?search_query=zetamonk'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons> */}
      //     </SocialMediaWrap>
      //   </SocialMedia>
      // </FooterContainer>

      // <IconContext.Provider value={{ color: "green", size: "420" }}>
      //   <ContactSecres show={show}>
      //     <Container>
      //       <ContactMain>
      //         <Contactgrid>
      //           <Contactfeedback>
      //             <FeedbackThankyou>
      //               Thankyou for considering{" "}
      //               <span style={{ color: "#867AE9" }}>Zeta</span>
      //               <span style={{ color: "#E5D549", marginLeft: "5px" }}>
      //                 Monk
      //               </span>{" "}
      //               for your project.
      //             </FeedbackThankyou>
      //             <Feedbackreply>
      //               Your Request has been submitted we will get back to you soon
      //               to give details on your project.
      //             </Feedbackreply>
      //             <Feedbackhome>
      //               <Button1 to="/">
      //                 {" "}
      //                 <span style={{ color: "#867AE9" }}>Zeta</span>
      //                 <span style={{ color: "#E5D549", marginLeft: "5px" }}>
      //                   Monk
      //                 </span>
      //                 .com
      //               </Button1>
      //             </Feedbackhome>
      //           </Contactfeedback>

      //           <Feedbacklogo>
      //             <FaCheckCircle></FaCheckCircle>
      //           </Feedbacklogo>
      //         </Contactgrid>
      //       </ContactMain>
      //     </Container>
      //   </ContactSecres>
      // </IconContext.Provider>
    // </> */}

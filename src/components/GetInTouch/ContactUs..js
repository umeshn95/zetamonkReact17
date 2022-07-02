import React from 'react'
import  Grid  from '@mui/material/Grid';
import contactimage from '../../images/contact_us.webp'
import Background from '../../images/contactus.svg'

const ContactUs = () => {
  return (
   <>
    <div className='GetInTouch_sub' >
            
            <Grid spacing={4} container>
                <Grid  item xs={12} sm={12} md={6} lg={6} xl={6} >
                    <div className='GetInTouch_heading'>
                    <span style={{color:'#2176FF'}}>Let’s build</span> something awesome together.
                    </div>
                    <div className='GetInTouch_description'>
                    We’d love to discuss your ideas and look forward to <br/> bring them to  life!
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className='GetInTouch_main_form'>
                        <div className='GetInTouch_sub_form'>
                            <div className='GetInTouch_sub_talk' >
                            <div className='GetInTouch_sub_head' >
                            Get in Touch
                                </div>
                            <div className='GetInTouch_sub_description' >
                            Let’s talk about your project.
                                </div>
                            </div>
                            <div className='GetInTouch_sub_name' >
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <div className='GetInTouch_full_name'  >
                                        <label>Full Name</label>
                                        <input type='text'></input>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                    <div className='GetInTouch_email'  >
                                        <label>Email</label>
                                        <input type='text'  ></input>
                                        </div>
        
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='GetInTouch_sub_seeking' >
        
                            <div  className='GetInTouch_sub_what_seeking'  >
                            <label> What are you seeking? </label>
                            <select id="cars" name="cars">
                            <option value="dteam">Dedicated Team</option>
        <option value="fgigs">Fixed gigs</option>
        <option value="copportunity">Career opportunity</option>
        <option value="Ginquiry">General Inquiry</option>
        </select>
                                </div>
                               
                            </div>
                            <div className='GetInTouch_sub_hear' >
                            <div className='GetInTouch_sub_want_hear'  >
                            <label> How did you hear about ZetaMonk? </label>
                            <select id="cars" name="cars">
        <option value="smedia">Social Media</option>
        <option value="linkedin">Linkedin</option>
        <option value="dsearch">Direct Search</option>
        <option value="Friends">Friends</option>
        </select>
                                        </div>
                            </div>
                            <div className='GetInTouch_sub_message' >
                                <div className='GetInTouch_sub_message_here'  >
                                        <label>Your Message</label>
                                        <textarea type='text'  ></textarea>
                                        </div>
                            </div>
                            <div className='GetInTouch_sub_button' >
                                Send Message
                            </div>
                    </div>
                    </div>
                </Grid>
        </Grid>
        </div>
        
        
        <Grid container spacing={4} style={{background: `url(${Background}) no-repeat`, backgroundSize:"cover"  }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className='zetamonk_contact_global_heading'>Dedicated to Provide Reliable Software Development Services</div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}></Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}  align='center'>
              <div>
                <div className='zetamonk_contacus_numbers'>30+</div>
                <div className='zetamonk_contacus_numbers_text'>SUCCESSFUL PROJECTS</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} align='center'>
            <div>
                <div className='zetamonk_contacus_numbers'>97%</div>
                <div className='zetamonk_contacus_numbers_text'>CUSTOMER SATISFACTION RATE</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} align='center'>
            <div>
                <div className='zetamonk_contacus_numbers'>50+</div>
                <div className='zetamonk_contacus_numbers_text'>DEVELOPERS AND ENGINEERS</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2} align='center'>
            <div>
                <div className='zetamonk_contacus_numbers'>5+</div>
                <div className='zetamonk_contacus_numbers_text'>YEARS OF EXPERIENCE</div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2} xl={2}></Grid>
          </Grid>
        </Grid>
        </Grid>
        
      
      </>
  )
}

export default ContactUs
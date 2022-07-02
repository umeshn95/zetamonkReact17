import { Grid } from "@mui/material";
import React, { useState,useEffect } from "react";
import mainbannerimage from "../../images/landingpagebanner.png";
import fintech from "../../images/fintechs.png";
import { makeStyles } from "@material-ui/styles";
import "./mainbanner.css";
import inovator from "../../images/innovators.png";
import businessz from "../../images/businesses.png";
import entrepreneur from "../../images/entrepreneurs.png";
import startup from "../../images/startups.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";
import FreeConsultation from "../FreeConsultation/FreeConsultation";

const MainBanner = ({history}) => {

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};



    const imageArray = [fintech, inovator, businessz, entrepreneur, startup]
    const [images, setImages] = useState(0)
    const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
    const imagescroll = () => {
        setTimeout(() => {
            if (images < 4 && images >= 0) {
            setImages(images+1)
            } else {
                setImages(0)
        }
           
        
    },2000)
    }
    
  

   const useStyle = makeStyles((theme) => ({
    haeding: {
      height: "100vh",
    },
    headbutton: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  }));

  const classes = useStyle();
 
  useEffect(() => {
    imagescroll()
  });
    
  return (
    <React.Fragment>
      <div
      className="mainbanner_main"
      style={{
        backgroundImage: `url(${mainbannerimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="mainbanner_sub">
        <Grid container>
          <Grid className={classes.haeding} item md={6} lg={6} margin="auto">
            <div className="Mainbanner_heading_description"  >
              <div className="Mainbanner_heading">
                Software Development Consulting for <br/>  <div href="" class="typewrite" data-period="2000" data-type='[ "Innovators", "Businesses", "Startups", "Entrepreneurs" ]'>
    <span class="wrap"></span>
  </div>
              </div>
              <div className="Mainbanner_description">
                ZetaMonk offers software development consulting services for
                businesses, startups, and enterprises. Partner with a reliable
                software development company to scale up your engineering
                capacity.
              </div>
              <FreeConsultation/>

 

            </div>
             
          </Grid>
          <Grid item md={6} lg={6} align="center" justify="center" margin="auto">
            <div  className='main_banner_animation'>
              <img
                className='main_banner_image_mainstream'
                src={imageArray[images]}
              ></img>
            </div>
          </Grid>
        </Grid>
          </div>
          {console.log(images)}
      </div>
    </React.Fragment>
  );
};

export default MainBanner;

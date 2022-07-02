import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Webdev from './pages/Webdev/Webdev';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar, Footer } from './components';
import Chatbot from './pages/Chatbot/Chatbot';
import SchoolManage from './pages/SchoolManage/SchoolManage';
import About from './pages/About/About';
import {Helmet} from 'react-helmet';
import Mobile from './pages/Mobile/Mobile';
import Digimarket from './pages/Digimarket/Digimarket';
import IOT from './pages/IOT/IOT';
import Whatwedo from './pages/Whatwedo/Whatwedo';
import Technology from './pages/Technology/Technology';
import TechnologyP from './pages/TechnologyP/TechnologyP';
import TechnologyS from './pages/TechnologyS/TechnologyS';
import TechnologyD from './pages/TechnologyD/TechnologyD';
import Header from './components/Header/Header';
import './App.css'
import Appdevelopment from './components/Webdevelopment/Appdevelopment';
import EnterpiseDevelopment from './components/Webdevelopment/EnterpiseDevelopment';
import Uiuxdevelopment from './components/Webdevelopment/Uiuxdevelopment';
import Iot from './components/Webdevelopment/Iot';
import SoftwareQuality from './components/Webdevelopment/SoftwareQuality';
import Support from './components/Webdevelopment/Support';
import Ecommerce from './components/Webdevelopment/Ecommerce';
import Healthcare from './components/Webdevelopment/Healthcare';
import Education from './components/Webdevelopment/Education';
import Foodgrocery from './components/Webdevelopment/Foodgrocery';
import AboutUs from './components/Webdevelopment/Aboutus';
import Career from './components/Webdevelopment/Career';
import GetInTouch from './components/GetInTouch/GetInTouch';
const APP= (
  <>
    
  <Helmet>
    <meta charSet='UTF-8'/>
    <link rel="icon" href="/favicon.ico"/>
  <link rel="apple-touch-icon" href="/logo192.png"/>
      <title>zetamonk</title>
      <meta name='description' content='zetamonk web development chatbot development ui/ux development'/>
      <meta name='viewport' content='width=device-width,initial-scale=1'/>


  </Helmet>
    <Router>

      <GlobalStyle />
      <ScrollToTop />
      <Navbar/>
      
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contactus' component={SignUp} />
        <Route path='/webdev' component={Webdev} />
        <Route path='/appdev' component={Appdevelopment} />
        <Route path='/enterprisedevelopment' component={EnterpiseDevelopment} />
        <Route path='/Uiux' component={Uiuxdevelopment} />
        <Route path='/qualityassurance' component={SoftwareQuality} />
        <Route path='/support' component={Support} />
        <Route path='/ecommerce' component={Ecommerce} />
        <Route path='/healthcare' component={Healthcare} />
        <Route path='/education' component={Education} />
        <Route path='/food' component={Foodgrocery} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/career' component={Career} />
        <Route path='/chatbot' component={Chatbot} />
        <Route path='/schoolmanage' component={SchoolManage} />
        <Route path='/about' component={About} />
        <Route path='/mobile' component={Mobile} />
        <Route path='/digitalmarket' component={Digimarket} />
        <Route path='/iot' component={Iot} />
        <Route path='/whatwedo' component={Whatwedo} />
        <Route path='/technology' component={Technology} />
        <Route path='/technologyp' component={TechnologyP} />
        {/* <Route path='/contactres' component={Contactresponse} /> */}
        <Route path='/technologys' component={TechnologyS} />
        <Route path='/technologyD' component={TechnologyD} />
        <Route path='/contact' component={GetInTouch} />



      </Switch>
      <Footer />
    </Router>
    </>
  );


 


export default APP;

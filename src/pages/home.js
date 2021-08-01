
import React, {Component} from 'react';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import HeaderSec from '../component/header_sec.js';
import Banner from '../component/banner.js';
import OurFeatures from '../component/our_features.js';
import AboutUs from '../component/about_us.js';
import OurService from '../component/our_service.js';
import TestimonialsSec from '../component/testimonials_sec.js';
import ContactSec from '../component/contact_sec.js';
import FooterSec from '../component/footer_sec.js';







class Home extends Component {


    render(){
        
        return(
            <div className="home_page" style={{background:`url('/images/home_bg.svg')`,}}>
                <HeaderSec/>
              
               <Banner/>
               <OurFeatures/>
               <AboutUs/>
               <OurService/>
               <TestimonialsSec/>
               <ContactSec/>
               <FooterSec/>

            </div>
        );

        
    }

}
export default  Home;
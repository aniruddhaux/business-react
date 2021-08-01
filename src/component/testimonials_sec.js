import React, {Component} from 'react';
import { ListGroup, ListGroupItem, } from 'reactstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TestimonialsSlider from './testimonials_slider.js'






class TestimonialsSec  extends Component {


    render(){
        return(
            <div className="testimonials_sec">
                
                <div className="container testimonials_wrapper" style={{background:`url('/images/testimonial_wrapper_bg.svg')`,}} data-aos="fade-down">

                    <div className="t_patten_top ">
                        <img className="t_circle_one"  data-aos="fade-right" src="images/t_circle_one.svg" alt="circle-one"/>
                        <img className="t_circle_two" data-aos="fade-left" src="images/t_circle_two.svg" alt="circle-one"/>
                        <img className="t_polygon t_polygon_one" data-aos="fade-right" src="images/t_polygon_one.svg" alt="polygon-one"/>
                        <img className="t_polygon t_polygon_two" data-aos="fade-left" src="images/t_polygon_two.svg" alt="polygon-two"/>
                        <img className="t_polygon t_polygon_three" data-aos="fade-left" src="images/t_polygon_three.svg" alt="polygon-three"/>
                        <img className="t_circle_photo circle_photo_one" data-aos="fade-right"  data-aos="fade-right" src="images/t_circle_photo_one.svg" alt="circle-photo-one"/>
                        <img className="t_circle_photo circle_photo_two" data-aos="fade-left" src="images/t_circle_photo_two.svg" alt="circle-photo-one"/>
                        <img className="t_circle_photo circle_photo_three" data-aos="fade-right" src="images/t_circle_photo_three.svg" alt="circle-photo-one"/>
                    </div>

                     <div className="t_patten_bottom">
                        <img className="t_circle_two" data-aos="fade-right" src="images/t_circle_two.svg" alt="t circle one"/>
                        <img className="t_polygon t_polygon_one" data-aos="fade-left" src="images/t_polygon_one.svg" alt="t polygon-one"/>
                        <img className="t_polygon t_polygon_two" data-aos="fade-right" src="images/t_polygon_two.svg" alt="t polygon-two"/>
                        <img className="t_polygon t_polygon_three" data-aos="fade-left" src="images/t_polygon_three.svg" alt="t polygon-three"/>`
                        <img className="t_circle_photo circle_photo_two" data-aos="fade-right" src="images/t_circle_photo_four.svg" alt="circle-photo-one"/>
                        <img className="t_circle_photo circle_photo_three" data-aos="fade-left" src="images/t_circle_photo_five.svg" alt="circle-photo-one"/>
                    </div>


                    <h3 className="blog_title text-uppercase font-weight-bold text-center pb-3" data-aos="fade-up">i-BHARAT TESTIMONIALS</h3>
                    <div className="testimonials_contain" data-aos="fade-right">
                        <TestimonialsSlider/>
                    </div>
                    <div className="testimonials_circle">
                        <div className="circle circle_one" data-aos="fade-left">&nbsp;</div>
                        <div className="circle circle_two" data-aos="fade-right">&nbsp;</div>
                    </div>
                 </div>
            </div>

            
        );

        
    }

}
export default  TestimonialsSec;
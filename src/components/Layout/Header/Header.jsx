import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../assets/images/Is-Bad-Boys-for-Life-Coming-to-Netflix.jpg";
import img2 from "../../../assets/images/mulan.jpg";
import img3 from "../../../assets/images/tenet.jpg";
import img4 from "../../../assets/images/Wonder-Woman-1984.jpg";

import './Header.sass';



function Header() {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };
    const sliders = [
        {image: img1, name: "Bad Boys \n for life"},
        {image: img2, name: "Mulan"},
        {image: img3, name: "Tenet"},
        {image: img4, name: "Wonder Woman 1984"},
    ];

    return(
        <header>
            <div className="slider_home">
                <Slider {...settings}>
                    {sliders.map((slider, idx) => (
                        <div key={idx} className="slider_items" >
                            <span className="year">2020</span>
                            <img src={slider.image} alt={slider.name} />
                            <span className="film_name">{slider.name}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </header>
    )
}

export default Header


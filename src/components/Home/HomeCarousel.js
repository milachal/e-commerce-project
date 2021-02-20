import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Escada from '../../images/escada-campaign.jpg';
import MJacobs from '../../images/marc-jacobs-campaign.jpg';

const HomeCarousel = () => {
    
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
    }

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Image src={Escada} alt="escada-campaign"></Image>
                </div>
                <div>
                    <Image src={MJacobs} alt="ippolita-campaign"></Image>
                </div>
            </Slider>
        </div>
    )
}

const Image = styled.img`
    width: 100%;
`

export default HomeCarousel;
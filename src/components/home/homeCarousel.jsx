import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Escada from '../../images/escada-campaign.jpg';
import MJacobs from '../../images/marc-jacobs-campaign.jpg';

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'linear',
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={Escada} alt="escada-campaign" />
        </div>
        <div>
          <Image src={MJacobs} alt="ippolita-campaign" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;

const Image = styled.img`
    width: 100%;
`;

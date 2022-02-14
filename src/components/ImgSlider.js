import React from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <Link to="/details/mrVWrAlN4apDpMBuBqk7">
          <img src="/assests/images/slider-badag.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <img src="/assests/images/slider-badging.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slider-scales.jpg" alt="" />
      </Wrap>
      <Wrap>
        <img src="/assests/images/slider-scale.jpg" alt="" />
      </Wrap>
    </Carousel>
  );
}

const Carousel = styled(Slider)`
  margin-top: 15px;
  .slick-next {
    right: -14px;
  }
  .slick-prev{
    left:-7px;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: visible;
  }
  button {
    z-index: 1;
  }
`;

const Wrap = styled.div`
  @media screen and (max-width: 768px) {
    height: 160px;
  }
  img {
    width: 100%;
    height: 100%;
    border: 4px solid transparent;
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    object-fit: cover;
    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;

export default ImgSlider;

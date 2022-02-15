import React,{useState , useEffect} from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import data from './Data';

function ImgSlider() {
  const [Data,setData] = useState(data)
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
        <Link to="/details/mrVWrAlN4apDpMBuBqk7">
          <img src="/assests/images/slider-badging.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/details/mrVWrAlN4apDpMBuBqk7">
          <img src="/assests/images/slider-scale.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/details/mrVWrAlN4apDpMBuBqk7">
          <img src="/assests/images/slider-scales.jpg" alt="" />
        </Link>
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
  @media screen and (min-width: 728px){
    margin-top: 5px;
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

import React, { useRef , useEffect , useState } from 'react'
import Data from '../components/Data'
import styled from 'styled-components'
function Series() {



  return (
    <SeriesSec>
      <SeriesContainer>
        {Data.map((doc)=>{
          const {description, cardImg , title , id} = doc
        return (
          <Wrap >
            <img src={cardImg} alt="" />
            <video autoPlay={true} loop={true} playsInline={true}>
              <source src="/assests/videos/disney.mp4" type="video/mp4" />
            </video>
          </Wrap>
        );
      })}
      </SeriesContainer>
    </SeriesSec>
  );
}

const SeriesSec = styled.section`
margin-top: 120px;
min-height: calc(100vh - 120px);
padding:0 41px;
max-width: 100vw;
`
const SeriesContainer = styled.div`
display: grid;
grid-template-columns: repeat(5,1fr);
grid-gap: 15px;

@media screen and (max-width:768px) {
  grid-template-columns: repeat(1, 1fr);
}
`

// `;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 2px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 1;
    bottom: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;

    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
      z-index: 3;
    }
  }
  .active{
      opacity: 1;
      z-index: 3;
  }
`;
export default Series
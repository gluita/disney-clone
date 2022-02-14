import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import db from "../firebase-config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { IoCloseSharp } from "react-icons/io5";

function Details() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [trailer, setTrailer] = useState(false);
  useEffect(() => {
    const collectionRef = collection(db, "movies");

    const getDetailData = async () => {
      const data = await getDocs(collectionRef);
      data.docs.filter((movie) => {
        if (movie.id === id) {
          const movieData = { ...movie.data() };
          setDetailData(movieData);
        }
      });
    };
    getDetailData();
  }, [id]);

  const showTrailer = () => {
    setTrailer(!trailer);
    console.log("who");
  };
  return (
    <Container>
      <Movie_Logo>
        <img src={detailData.titleImg} alt="" />
      </Movie_Logo>
      <Controls>
        <PlayButton>
          <img src="/assests/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton onClick={showTrailer}>
          <img src="/assests/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/assests/images/group-icon.png" alt="" />
        </GroupButton>
      </Controls>
      <GridCtrl>
        <MobAddButton>
          <span>+</span>
        </MobAddButton>
        <MobGroupButton>
          <img src="/assests/images/group-icon.png" alt="" />
        </MobGroupButton>
      </GridCtrl>

      <BackgroundImage>
        <img src={detailData.backgroundImg} alt="" />
      </BackgroundImage>
      {trailer && (
        <TrailerVideo>
          <iframe
            allow="autoplay"
            frameborder="0"
            marginheight="0"
            scrolling="no"
            type="text/html"
            src={
              detailData.trailer +
              `?start=3&end=0&autoplay=1&fs=0&showinfo=0&rel=0&cc_load_policy=0&iv_load_policy=3"`
            }
            width="788"
            height="443"
          ></iframe>
          <Close_Button>
            <IoCloseSharp onClick={showTrailer} />{" "}
          </Close_Button>
        </TrailerVideo>
      )}
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  width: 100%;
  padding: 30px 41px 0px;
  position: relative;
  
  /* overflow: hidden; */
  @media screen and (max-width: 768px) {
    padding: 0 18px;
  }
  .scale-up-center {
    -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: scale-up-center 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
const GridCtrl = styled.div`
  display: flex;
  margin-top: 20px;
  @media screen and (min-width:768px) {
    display:none
  }
`;
const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;
  background-image: url("detailData.backgroundImg");
  background-image: url("detailData.backgroundImg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  /* img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */

  z-index: -1;
`;
const Movie_Logo = styled.div`
  width: 32vw;
  min-width: 200px;
  min-height: 170px;
  height: 32vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  border-radius: 4px;
  border: none;
  font-size: 14.5px;
  height: 50px;
  padding: 0 22px;
  cursor: pointer;
  margin-right: 14px;
  @media screen and (max-width: 768px) {
  }
`;
const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid white;
  transition-duration: 5s;
  position: relative;
`;
const AddButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  margin-right: 13px;

  span {
    font-size: 30px;
  }
  @media screen and (max-width:768px) {
    display: none;
  }
`;
const GroupButton = styled(AddButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 25px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TrailerVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(9 9 9 / 50%);
  iframe{
    width:80%;
    margin-right:12px;
    margin-left:12px;
  }
`;

const TrailerContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Close_Button = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  font-size: 35px;
  color: white;
  cursor: pointer;
  top: 40px;
  right: 50px;
  @media screen and (max-width:768px){
    top:70px;
    right:12px;
  }
`;
const Video = styled.div``;
export default Details;

const MobAddButton = styled(AddButton)`
  display: flex;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const MobGroupButton = styled(GroupButton)`
display:block`;

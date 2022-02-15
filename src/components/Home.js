import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movies/movieSlice";
import db from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

function Home() {
  const username = useSelector((state) => state.user.name);
  const dispatch = useDispatch();

  useEffect(() => {
    const colRef = collection(db, "movies");
    const getData = async () => {
      const data = await getDocs(colRef);
      let recommends = []
      data.docs.map((movie) => {
        recommends = [...recommends,{...movie.data(),id:movie.id}]
      })
      dispatch(setMovies({
      recommend:recommends
    }))
    };
    getData()
    
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      {/* <Viewers /> */}
      <Movies />
    </Container>
  );
}

const Container = styled.main`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  &:before {
    background: url("/assests/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
export default Home;

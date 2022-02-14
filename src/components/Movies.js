import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Movies() {
  const recommend = useSelector((state) => state.movie.recommend);
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {recommend &&
          recommend.map((movie, key) => {
            return (
              <Wrap key={key}>
                <Link to={`/details/` + movie.id}>
                  <img src={movie.cardImg} alt="" />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

const Container = styled.section``;
const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  padding: 0 0 25px;
  @media screen and (max-width:768px){
    grid-template-columns: repeat(2,1fr);
  }
`;
const Wrap = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 3px solid rgb(64 60 60 / 10%);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3.4px;
  }
  &:hover {
    transform: scale(1.03);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Movies;

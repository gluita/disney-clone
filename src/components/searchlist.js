import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import db from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

const SearchList = () => {
  const movies = useSelector((state) => state.search.movies);
  const searchTerm = useSelector((state) => state.search.searchTerm);
  const [search, setSearches] = useState(false);
  const [movieArray, setMovieArray] = useState([]);

  const findMatchingMovies = () => {
    const matchingMovies = movies.filter((movie) => {
      if (movie.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return movie;
      }
    });
    setMovieArray(matchingMovies);
  };

  const allMovies = async () => {
    const colRef = collection(db, "movies");
    const data = await getDocs(colRef);
    const result = data.docs.map((movie) => {
      return { ...movie.data(), id: movie.id };
    });
    setMovieArray(result);
  };

  const showMovies = async () => {
    if (searchTerm == "") {
      allMovies();
    } else if (searchTerm) {
      findMatchingMovies();
    }
  };

  useEffect(() => {
    showMovies();
  }, [searchTerm]);

  return (
    <SearchSec>
      <MoviesList>
        {movieArray.map((doc) => {
          const { cardImg, id } = doc;
          return (
            <MovieItems key={id}>
              <Link to={`/details/` + id}>
                <img src={cardImg} alt="" />
              </Link>
            </MovieItems>
          );
        })
        }
      </MoviesList>
    </SearchSec>
  );
};

const SearchSec = styled.div`
  height: 100%;
  padding: 0 3rem;
  margin-top: 30px;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;
const MoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const MovieItems = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid rgb(64 60 60 / 10%);
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
export default SearchList;

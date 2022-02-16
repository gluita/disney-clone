import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedMovies } from "../features/search/searchSlice";
import db from "../firebase-config";
import { collection, getDocs, where } from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
import { contains } from "@firebase/util";

function Searchform() {
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const queryRef = collection(db, "movies");
  const [searchValue, setSearchValue] = useState("");
  const foundMovies = useCallback(async () => {
    if (searchValue) {
      const q = query(queryRef, orderBy("title"));
      const result = await getDocs(q);
      const arr = result.docs;
      if (arr.length > 0) {
        const data = arr.map((doc) => {
          const { cardImg, title, id} = doc.data();
          return { cardImg, title,id };
        });
        dispatch(setSearchedMovies({ searchTerm: searchValue, movies: data }));
      }
    } else {
      dispatch(
        setSearchedMovies({
          searchTerm: "",
          movies: [],
        })
      );
    }
  }, [searchValue]);

  useEffect(() => {
    foundMovies();
  }, [searchValue, foundMovies]);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const searchMovies = () => {
    dispatch(setSearchValue(searchRef.current.value));
  };

  return (
    <InputContainer>
      <InputBox>
        <input
          type="text"
          id="name"
          placeholder="Search"
          className="input"
          ref={searchRef}
          onChange={searchMovies}
          autoComplete="off"
        ></input>
        <img src="/assests/images/search-icon.svg" alt="" />
      </InputBox>
    </InputContainer>
  );
}
const InputContainer = styled.div`
text-align: center;
`
const InputBox = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  display:inline-block;
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  text-align: center;
  input {
    background-color: transparent;
    border: none;
    width: 200px;
    border-bottom: 1px solid white;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    color: white;
    &:focus {
      width: 300px;
      outline: none;
      border-bottom: 1px solid blue;
    }
  }
  img{
    width:17px;
    position: absolute;
    display: inline-block;
    right:8px;
  }
`;


export default Searchform;

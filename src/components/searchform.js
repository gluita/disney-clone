import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function Searchform() {
  const searchValue = useRef("");



  useEffect(()=>{
    searchValue.current.focus()
  },[])
  const searchMovies = () => {
    console.log(searchValue.current.value);
  };
  return (
      <InputBox>
        <input
          type="text"
          id="name"
          placeholder="Search"
          className="input"
          ref={searchValue}
          onChange={searchMovies}
          autocomplete="off"
        ></input>
      </InputBox>
  );
}


const InputBox = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    width: 200px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    color: white;
    &:focus {
      width: 300px;
      border-bottom: 1px solid blue;
      outline: none;
    }
  }
`;

export default Searchform;

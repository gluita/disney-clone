import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Searchform from "../components/searchform";
import SearchList from "../components/searchlist";

function Search() {
  return (
        <SearchSec>
          <Searchform/>
          <SearchList/>
        </SearchSec>
    
  )
}
const SearchSec = styled.div`
  min-height: calc(100vh - 80px);
  margin-top: 80px;
`;
export default Search;

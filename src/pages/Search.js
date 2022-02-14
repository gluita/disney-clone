import React, { useEffect, useRef, useState } from "react";

import styled from "styled-components";
import Searchform from "../components/searchform";

function Search() {
  return (
        <SearchSec>
          <Searchform/>
        </SearchSec>
    
  )
}
const SearchSec = styled.div`
  min-height: calc(100vh - 66px);
  margin-top: 66px;
`;
export default Search;

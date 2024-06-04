import RightNav from "./RightNav";
import Box from "@mui/material/Box";
import styled from "styled-components";

// import React from 'react'
export default function Superheader() {
  return (
    <Main>
      <Box>Free shipping on domestic orders over $75!</Box>
      <Box>
        <RightNav />
      </Box>
    </Main>
  );
}

const Main = styled(Box)`
  background-color: #313235;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  height: 40px;
  padding: 0 30px;
  margin-top: 10px;
`;

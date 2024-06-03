// import React from 'react'

import NavLinks from "./NavLinks";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Main>
      <Text variant="h5">Sole&Ankle</Text>
      <NavLinks />
    </Main>
  );
}

const Main = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1440px;
  height: 72px;
  border-bottom: 2px solid #c9cecf;
  margin-bottom: 3em;
`;

const Text = styled(Typography)`
  padding: 0 30px;
`;

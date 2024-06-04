// import React from 'react'

import NavLinks from "./NavLinks";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Header() {
  return (
    <Main>
<<<<<<< HEAD
      <Text variant="h4">Sole&Ankle</Text>
=======
      <Text variant="h5">Sole&Ankle</Text>
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
      <NavLinks />
    </Main>
  );
}

const Main = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 auto;
<<<<<<< HEAD
=======
  max-width: 1440px;
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
  height: 72px;
  border-bottom: 2px solid #c9cecf;
  margin-bottom: 3em;
`;

const Text = styled(Typography)`
  padding: 0 30px;
`;

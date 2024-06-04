// import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Filters from "./Filters";
import SHOES from "../data";
<<<<<<< HEAD
import { devices } from "../Breakpoints";
=======

>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
export default function ShoeGrid() {
  return (
    <Box>
      <MainHeader>
        <Box>
          <Typography variant="h5">Running</Typography>
        </Box>
        <Box>
          <Filters />
        </Box>
      </MainHeader>

      <Grid>
        {SHOES.map((shoe) => {
          return (
            <Img key={shoe.name}>
<<<<<<< HEAD
              <img src={shoe.imageSrc} alt="" />
              <h2>{shoe.name}</h2>
=======
              <h2>{shoe.name}</h2>
              <img src={shoe.imageSrc} alt="" />
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
            </Img>
          );
        })}
      </Grid>
    </Box>
  );
}

const MainHeader = styled(Box)`
  display: flex;
<<<<<<< HEAD
  justify-content: space-between;
  margin-bottom: 2em;
`;
const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2em;

  @media only screen and (${devices.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (${devices.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Img = styled(Box)``;
=======
  gap: 20em;
`;
const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Img = styled(Box)`
  width: 300px;
`;
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca

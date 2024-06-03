// import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Filters from "./Filters";
import SHOES from "../data";

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
              <h2>{shoe.name}</h2>
              <img src={shoe.imageSrc} alt="" />
            </Img>
          );
        })}
      </Grid>
    </Box>
  );
}

const MainHeader = styled(Box)`
  display: flex;
  gap: 20em;
`;
const Grid = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Img = styled(Box)`
  width: 300px;
`;

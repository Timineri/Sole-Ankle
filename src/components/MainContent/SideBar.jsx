import { Box } from "@mui/material";
// import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
<<<<<<< HEAD
import styled from "styled-components";
=======
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const Side = [
  { Key: 1, name: "Lifestyle" },
  { Key: 2, name: "Jordan" },
  { Key: 3, name: "Running" },
  { Key: 4, name: "Basketball" },
  { Key: 5, name: "Training and Gym" },
  { Key: 6, name: "Football" },
  { Key: 7, name: "Skateboarding" },
  { Key: 8, name: "American Football" },
  { Key: 9, name: "Baseball" },
  { Key: 10, name: "Golf" },
  { Key: 11, name: "Tennis" },
  { Key: 12, name: "Athletics" },
  { Key: 13, name: "Walking" },
];

export default function SideBar() {
  return (
    <Box>
      <Box role="presentation" onClick={handleClick}>
<<<<<<< HEAD
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: "2em", width: "200px" }}
        >
=======
        <Breadcrumbs aria-label="breadcrumb">
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Sales
          </Link>
          <Link
            underline="hover"
            color="text.primary"
            href="/material-ui/react-breadcrumbs/"
            aria-current="page"
          >
            Shoes
          </Link>
        </Breadcrumbs>
      </Box>
<<<<<<< HEAD
      <Content>
        {Side.map((side) => {
          return <p key={side.Key}>{side.name}</p>;
        })}
      </Content>
    </Box>
  );
}

const Content = styled(Box)`
  font-size: 20px;
  line-height: 2em;
`;
=======
      <Box>
        {Side.map((side) => {
          return <h5 key={side.Key}>{side.name}</h5>;
        })}
      </Box>
    </Box>
  );
}
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca

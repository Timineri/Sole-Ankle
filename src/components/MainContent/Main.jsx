// import React from "react";
// import * as React from "react";

// export default function ActiveLastBreadcrumb() {
//   return (

//   );
// }
// import React from "react";
import Box from "@mui/material/Box";
import styled from "styled-components";
import SideBar from "./SideBar";
import ShoeGrid from "./ShoeGrid";

export default function Main() {
  return (
    <Section>
      <SideBar />
      <ShoeGrid />
    </Section>
  );
}

const Section = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;
`;

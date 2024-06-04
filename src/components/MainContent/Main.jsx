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
<<<<<<< HEAD
  gap: 10em;
=======
  justify-content: space-between;
>>>>>>> 71fdfae82c95e9165690969346fc5c80839d39ca
  margin: 0 auto;
  padding: 0 30px;
`;

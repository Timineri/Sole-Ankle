import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Header from "./components/Header/Header";
import MainHeader from "./components/MainContent/MainHeader";
import Superheader from "./components/NavBar/Superheader";

export default function App() {
  return (
    <Body>
      <Superheader />
      <Header />
      <MainHeader />
      <GlobalStyles />
    </Body>
  );
}

const Body = styled(Box)`
  width: 1020px;
  height: 768px;

  opacity: 0px;
  margin: 0 auto;
`;

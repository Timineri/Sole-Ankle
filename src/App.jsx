import GlobalStyles from "./GlobalStyles";
import Header from "./components/Header/Header";
import MainHeader from "./components/MainContent/MainHeader";
import Superheader from "./components/NavBar/Superheader";

export default function App() {
  return (
    <div>
      <Superheader />
      <Header />
      <MainHeader />
      <GlobalStyles />
    </div>
  );
}

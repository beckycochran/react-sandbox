import styled from "styled-components";
import Buttons from "./Buttons";

const Home = () => {
  return (
    <>
      <Header>Click a button to turn the page that color!</Header>
      <Buttons />
    </>
  );
};

const Header = styled.h1``;

export default Home;

import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "./AppContext";


const Home = () => {
  const { appState, setAppState } = useContext(AppContext)

  return (
    <Wrapper>
      <h1>Here's a homepage!</h1>
    </Wrapper>
  );
};

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
padding-left: 5vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export default Home;

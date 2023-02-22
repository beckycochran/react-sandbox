import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "./AppContext";


const Home = () => {
  const { appState, setAppState } = useContext(AppContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("app", JSON.stringify(appState))
    localStorage.setItem("app", JSON.stringify(appState))
    console.log("submitted")
  }

  return (
    <Wrapper>
      <h1>Home</h1>
      <form onSubmit={handleSubmit}>
        <label>Color <input onChange={(e) => setAppState({ ...appState, color: e.target.value })} required/></label>
        <label>Number <input onChange={(e) => setAppState({ ...appState, number: e.target.value })} required/></label>
        <button disabled={JSON.stringify(appState) === '{}'} type="submit">Submit</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: flex-start;
`

export default Home;

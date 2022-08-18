import styled from "styled-components";
import Button from "./Button";

const Buttons = () => {
  const colors = ["red", "blue", "green", "gray"];

  return (
    <Wrapper>
      {colors.map((clr) => (
        <Button color={clr} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default Buttons;

import styled from "styled-components";
const Button = ({ color }) => {
  return (
    <Btn
      style={{
        "background-color": `${color}`
      }}
    >
      :)
    </Btn>
  );
};

const Btn = styled.button`
  height: 50%;
  font-size: 50px;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;

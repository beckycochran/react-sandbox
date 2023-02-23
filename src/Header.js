import { Link } from "react-router-dom";
import styled from "styled-components"

const Header = () => {

    return (
        <Wrapper>
            <StyledLink to="/">React App</StyledLink>
            <StyledLink to="/form">Form</StyledLink>
            <Greeting>Hi {}!</Greeting>
        </Wrapper>
    )
}
const Wrapper = styled.div`
display: flex;
background-color: lightgrey;
align-items: center;
height: 10vh;
width: 100vw;
padding: 0 3%;
font-size:1.5em;
`
const Greeting = styled.div`
font-size: 1.5em;
margin-left: 45vw;
font-weight: bold;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: inherit;
font-size: 1.5em;
margin: 0 5%;
`
export default Header;
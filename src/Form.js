import styled from "styled-components"

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.clear()
        sessionStorage.setItem("name", /*person's name here */)
      }
    

    return (
        <Wrapper>
            <h1>About me!</h1>
            <StyledForm onSubmit={handleSubmit}>

                <Label>Name: <input type="text" /></Label>
                <Label>Favorite color: <input type="text" /></Label>
                <Label>Favorite number: <input type="number" /></Label>
                <B>Submit</B>

            </StyledForm>
        </Wrapper>
    )
}

export default Form;

const B = styled.button`
width: fit-content;
font-size: 25px;
`
const Label = styled.label`
margin: 20px 0;
font-size: 25px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
padding-left: 5vw;
background-color: light-grey;
height: 100vh;
width: 100vw;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
width: 50vw;
`
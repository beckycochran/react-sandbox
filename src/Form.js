import { useEffect, useState } from "react";
import styled from "styled-components"

const Form = () => {
    const [formData, setFormData] = useState({})

    useEffect(()=> {
        fetch('/orders')
        .then(res=>res.json())
        .then(data=>console.log(data))
        .catch(e => console.log(e))
    }, [])

    const handleChange = (e) => {
        e.preventDefault()
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/form', {
         method: "POST",
         headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(d=>console.log(d))
        .catch(e=>console.log(e))
      }
    

    return (
        <Wrapper>
            <h1>Order some Ice cream!</h1>
            <StyledForm onSubmit={handleSubmit}>
                <Label>Ice Cream: <input type="text" id="iceCream" onChange={e=>{handleChange(e)}} /></Label>
                <Label>Num of scoops: <input type="number" id="numOfScoops" onChange={e=>{handleChange(e)}} /></Label>
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
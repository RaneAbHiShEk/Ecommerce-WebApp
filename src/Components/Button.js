import styled from "styled-components";

export const ButtonContainer=styled.button`
text-tranform: capitalize;
font-size:1.4rem;
background:transparent;
border: 0.09rem solid var(--lightRed);
color:var(--mainWhite);
border-radius:0.5rem;
padding:0.2rem 0.4rem;
cursor:pointer;
margin: 0.2rem 0.5rem 0.2rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--mainWhite);
    color:var(--mainDark);
}
`;
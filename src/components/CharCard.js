import React from "react";
import styled, { keyframes } from "styled-components";


const CardStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin: 10px;
    padding: 1px;
    color: ${(pr) => pr.theme.secondaryColor};
    background-color: ${(pr) => pr.theme.bgColorB};
    width: 20% ;
    display: flex;
    flex-direction: column;
    justify-content: left;
    flex-wrap: nowrap;

h3{
    margin-top:15px;
    margin-bottom:5px;
    //border: 1px solid ${(pr) => pr.theme.primaryColor};
    display: flex;
    justify-content: left;
    font-family: 'Quantico', sans-serif;
}

h4{
    margin:8px;
    //border: 1px solid ${(pr) => pr.theme.primaryColor};
    display: flex;
    justify-content: left;
    font-family: 'Quantico', sans-serif;
}

h5{
    margin:8px;
    //border: 1px solid ${(pr) => pr.theme.primaryColor};
    display: flex;
    justify-content: left;
    font-family: 'Quantico', sans-serif;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

@media ${(pr) => pr.theme.breakpointA} {
    width: 25%;
  }

  @media ${(pr) => pr.theme.breakpointB} {
    width: initial;
  }
`

export default function Character(props) {
  
    const {char} = props;
  
    return (
          <CardStyled>
            <img src={char.image}></img>
            <h3>Name: {char.name}</h3>
            <h4>Species: {char.species}</h4>
            <h4>Gender: {char.gender}</h4>
            <h4>Status: {char.status}</h4>
            <h4>Origin:</h4><h5>{char.origin.name}</h5>
            <h4>Location:</h4><h5>{char.location.name}</h5>
          </CardStyled>
    );
  }
  
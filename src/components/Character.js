// Write your Character component here
import React from "react";
import CharCard from "./CharCard";
import styled, { keyframes } from "styled-components";


const CharBlockStyled = styled.div`
    border: 1px solid ${(pr) => pr.theme.primaryColor};
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin-top: 14px;
    padding: 14px;
    color: ${(pr) => pr.theme.primaryColor};
    background-color: ${(pr) => pr.theme.bgColorA};
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
   
`


export default function charsDisplay(props) {
    const {charData} = props;

return (

<CharBlockStyled>
{
charData.map((char) => {
    return (
        <CharCard key={char.id} char={char}/>
    );
})
}
</CharBlockStyled>
    );
}
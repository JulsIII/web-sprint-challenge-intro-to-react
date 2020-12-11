// Write your Character component here
import React from "react";
import CharCard from "./CharCard";
import styled, { keyframes } from "styled-components";

export default function charsDisplay(props) {
    const {charData} = props;

return (

<div>
{
charData.map((char) => {
    return (
        <CharCard key={char.id} char={char}/>
    );
})
}
</div>
    );
}
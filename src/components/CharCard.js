import React from "react";

export default function Character(props) {
  
    const {char} = props;
  
    return (
          <div>
            <h3>Name: {char.name}</h3>
            <p>Status: {char.status}</p>
          </div>
    );
  }
  
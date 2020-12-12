import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character";
import Nav from "./components/Nav";
import axios from "axios";
import styled from "styled-components";


const HeaderStyled = styled.div`
    font-family: 'Neucha', cursive;
    color: ${(pr) => pr.theme.tertiaryColor};

`

const API_KEY = '';
const URL = 'https://rickandmortyapi.com/api/character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charData, setCharData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

 
  useEffect(() => {
    const fetchChars = () => {
      axios
        .get(`${URL}?api_key=${API_KEY}`)
        .then((res) => {
          setCharData(res.data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchChars();
  }, []);

  console.log(charData);

  return (
      <HeaderStyled className="App">
      <h1>CHARACTERS</h1>
      <Character charData={charData}/>
      <Nav/>
    </HeaderStyled>
  );
}


  export default App;

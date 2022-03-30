import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import BoardContainer from './containers/BoardContainer';
import PlayerContainer from './containers/PlayerContainer';


function App() {

  const[characterList, setCharacterList]= useState([]);
  const[chosenCharacter, setChosenCharacter]= useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[queryCharacters, setQueryCharacters]= useState([]);
  const[character, setCharacter]= useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});

  const fetchRandomCharacters = () => {
    fetch("http://localhost:8080/chars")
    .then(response => response.json())
    .then(characterBoard => setCharacterList(characterBoard))
    .catch(error => console.error(error))
  }

  useEffect(fetchRandomCharacters, []);

  console.log(characterList);

  return (
    <>
    <h1>??Guess Who??</h1>
    <BoardContainer />
    <PlayerContainer />
    {/* {characterList} */}
    </>
  );
}

export default App;

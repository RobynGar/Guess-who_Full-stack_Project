
import './App.css';
import {useEffect, useState} from 'react';
import BoardContainer from './containers/BoardContainer';
import PlayerContainer from './containers/PlayerContainer';


function App() {

  const[characterList, setCharacterList] = useState([]);
  const[chosenCharacter, setChosenCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[computerCharacter, setComputerCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[queryCharacters, setQueryCharacters] = useState([]);
  const[remainingCharacters, setRemainingCharacters]= useState([]);
  // const[character, setCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});

  const fetchRandomCharacters = () => {
    fetch("http://localhost:8080/chars/random/15")
    .then(response => response.json())
    .then(characterBoard => {
      setCharacterList(characterBoard);
      // added the setRemainingCharacters to know which characters are remaining and to compare against original characterList to
       // know which characters have been eliminated
      setRemainingCharacters(characterBoard)
    })
    .catch(error => console.error(error))
  }

  const choosePlayerCharacter = (selected) => {
    setChosenCharacter(selected);
  }

  const chooseCompChar = () => {
    // get random number between 0 and 14
    let rand = Math.floor(Math.random() * characterList.length);
    // sets the computerCharacter to the character at position random index no. 
    setComputerCharacter(characterList[rand]);
  }

  const startGame = () => {
    chooseCompChar();
  }

  useEffect(fetchRandomCharacters, []);
  
  return (
    <>
      <h1>??Guess Who??</h1>
      <h3>Click on your Character below</h3>
      <BoardContainer characterList={characterList} queryCharacters={queryCharacters} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter}/>
      <PlayerContainer  characterList={characterList} queryCharacters={queryCharacters} chosenCharacter={chosenCharacter} startGame={startGame}/>
      <h2>Your character is: {chosenCharacter.name}</h2>
      <h2>PC character is: {computerCharacter.name}</h2>
    </>
  );
}

export default App;

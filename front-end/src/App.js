
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
  const[displayMessage, setDisplayMessage] = useState("Click on your character below");
  const[queryOption, setQueryOption] = useState("");

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

  // chosen character is set as the icon clicked on by the player npm
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

  const sendQueryRequest = (option) => {
    console.log(queryOption);
    fetch(`http://localhost:8080/chars/features/${option}`)
    .then(response => response.json())
    .then(questionCharacters => setQueryCharacters(questionCharacters))
    .catch(error => console.error(error))
  }
  console.log(queryCharacters);

  useEffect(fetchRandomCharacters, []);
  useEffect(() => sendQueryRequest(queryOption), [queryOption]);
  
  return (
    <>
      <div className="game_title">
        <h1 className="game_title_text">??Guess Who??</h1>
      </div>
      <h3>{displayMessage}</h3>
      <div className='entireGame'>
      <BoardContainer characterList={characterList} queryCharacters={queryCharacters} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter}/>
      <PlayerContainer  characterList={characterList} queryCharacters={queryCharacters} chosenCharacter={chosenCharacter} startGame={startGame} setQueryOption={setQueryOption}/>
      {/* <h2>Your character is: {chosenCharacter.name}</h2>
      <h2>PC character is: {computerCharacter.name}</h2> */}
      
      </div>
    </>
  );
}

export default App;

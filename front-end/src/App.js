
import './App.css';
import {useEffect, useState} from 'react';
import BoardContainer from './containers/BoardContainer';
import PlayerContainer from './containers/PlayerContainer';
import TopBarContainer from './containers/TopBarContainer';


function App() {

  const[characterList, setCharacterList] = useState([]);
  const[chosenCharacter, setChosenCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[computerCharacter, setComputerCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[queryCharacters, setQueryCharacters] = useState([]);
  const[remainingCharacters, setRemainingCharacters]= useState([]);
  // const[character, setCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[displayMessage, setDisplayMessage] = useState("Click on your character below");
  const[queryOption, setQueryOption] = useState("");
  const[guessCharacter, setGuessCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});

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

  const makeGuess = (guess) => {
    setGuessCharacter(guess);
    // setDisplayMessage(`You are guessing ${guessCharacter.name}`)
    if (computerCharacter.name !== ""){
      if(guessCharacter.id === computerCharacter.id){
      setDisplayMessage(`Congratulations, it was ${guessCharacter.name}!`)
    } else {
      setDisplayMessage(`${guessCharacter.name} is incorrect, try again`)
    }
    }
    
  }
  

  const startGame = () => {
    // when game starts, random opponent character is chosen
    chooseCompChar();
    // and display message changes to prompt player's first turn
    setDisplayMessage('Select a question from the options below:')
  }

  const sendQueryRequest = (option) => {
    fetch(`http://localhost:8080/chars/features/${option}`)
    .then(response => response.json())
    .then(questionCharacters => setQueryCharacters(questionCharacters))
    .catch(error => console.error(error))
  }
  
  // this method works
  const compareQueryToBoard = () => {
    let isTrue = false;
    for (const char of queryCharacters){
      // for each of the chars returned by the query, see if any of them are the opponent's char. If they are, the query is true, else is false.
      if (char.name === computerCharacter.name){
        isTrue = true;
      }
    }
    removeCharactersFromRemaining(isTrue);
  }

  const removeCharactersFromRemaining = isTrue => {
    if (isTrue){
      // if the query was true,remove characters from remainingCharacters that are not in queryCharacters
      let filteredArr = remainingCharacters.filter(c => {
        let present = false;
        // each c of remaining characters...
        for (const char of queryCharacters){
          // ...is checked to see if it is in the queryCharacters.
          if (c.name === char.name){
            // if it is in Q.C., then the filter is returned true and the char stays in the remaining characters, if not then they are removed
            present = true;
          }
        }
        return present;
      })
      console.log(filteredArr);
      setRemainingCharacters(filteredArr);
      console.log(remainingCharacters);
    } else {
      // If opponent is not in query
      let filteredArr = remainingCharacters.filter(c => {
        let present = true;
        // each c of remaining characters...
        for (const char of queryCharacters){
          // ...is checked to see if it is in the queryCharacters.
          if (c.name === char.name){
            // if it is in Q.C., then the filter is returned false and the char is removed from the remaining characters, else they stay in remain
            present = false;
          }
        }
        return present;
      })
      console.log(filteredArr);
      setRemainingCharacters(filteredArr);
      console.log(remainingCharacters);
    }
  }

  

  useEffect(fetchRandomCharacters, []);
  useEffect(() => sendQueryRequest(queryOption), [queryOption]);
  
  return (
    <>
      <div className="game_title">
      <h1 className="game_title_text">??Guess Who??</h1>
      </div>
      <TopBarContainer compareQueryToBoard={compareQueryToBoard} displayMessage={displayMessage} setDisplayMessage={setDisplayMessage} startGame={startGame} chosenCharacter={chosenCharacter} setQueryOption={setQueryOption} makeGuess={makeGuess} />
      <div className='entireGame'>
      <BoardContainer remainingCharacters={remainingCharacters} characterList={characterList} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter} makeGuess={makeGuess}/>
      <PlayerContainer  characterList={characterList} queryCharacters={queryCharacters} chosenCharacter={chosenCharacter} startGame={startGame} setQueryOption={setQueryOption}/>
      {/* <h2>Your character is: {chosenCharacter.name}</h2>*/}
      {/* <h2>PC character is: {computerCharacter.name}</h2>  */}
      
      </div>
    </>
  );
}

export default App;

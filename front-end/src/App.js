
import './App.css';
import {useEffect, useState, useRef, useCallback} from 'react';
import BoardContainer from './containers/BoardContainer';
import PlayerContainer from './containers/PlayerContainer';
import TopBarContainer from './containers/TopBarContainer';
import { questions } from './components/questions';
import { compQuestions} from './components/compQuestions';
import ReactCanvasConfetti from "react-canvas-confetti";


function App() {

  const[characterList, setCharacterList] = useState([]);
  const[remainingCharacters, setRemainingCharacters]= useState([]);
  const[remainingComputerCharacters, setRemainingComputerCharacters]= useState([]);
  
  const[chosenCharacter, setChosenCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  const[computerCharacter, setComputerCharacter] = useState({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""});
  
  const[queryOption, setQueryOption] = useState("");
  const[queryCharacters, setQueryCharacters] = useState([]);
  const[computerQueryCharacters, setComputerQueryCharacters] = useState([]);
  const[computerQuestions, setComputerQuestions] = useState(['hair/blonde', "hair/black", "hair/brown", "hair/hijab", "topColour/red", "topColour/white", "topColour/black", "eyeColour/brown", "eyeColour/blue", "eyeColour/green", "gender/male", "gender/female", "piercings", "beard", "london", "pets", "hairAccessory", "glasses"]);
  
  const[displayMessage, setDisplayMessage] = useState("Click on your character below");
  const[displayQuestionMessage, setDisplayQuestionMessage] = useState("");
  const[playerTurn, setPlayerTurn] = useState('player');
  const[gameWon, setGameWon] = useState('');

  const [isGuessing, setIsGuessing] = useState(false);


  const resetGame = () => {
    setCharacterList([]); setChosenCharacter({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""}) ; setComputerCharacter({name:"", gender:"", hair_colour:"", eye_colour:"", glasses: false, piercings: false, beard: false, london: false, pets: false, hair_accessory: false, top_colour: ""}) ;
     setQueryCharacters([]) ; setRemainingCharacters([]) ; setDisplayMessage("Click on your character below") ; setRemainingComputerCharacters([]) ; setQueryOption("") ; 
     setComputerQuestions(['hair/blonde', "hair/black", "hair/brown", "hair/hijab", "topColour/red", "topColour/white", "topColour/black", "eyeColour/brown", "eyeColour/blue", "eyeColour/green", "gender/male", "gender/female", "piercings", "beard", "london", "pets", "hairAccessory", "glasses"]);
     setPlayerTurn('player') ; setGameWon('');
     fetchRandomCharacters();
  }

  const fetchRandomCharacters = () => {
    fetch("http://localhost:8080/chars/random/15")
    .then(response => response.json())
    .then(characterBoard => {
      setCharacterList(characterBoard);
      // added the setRemainingCharacters to know which characters are remaining and to compare against original characterList to
       // know which characters have been eliminated
      setRemainingCharacters(characterBoard);
      setRemainingComputerCharacters(characterBoard);
    })
    .catch(error => console.error(error))
  }

  // chosen character is set as the icon clicked on by the player npm
  const choosePlayerCharacter = (selected) => {
    setChosenCharacter(selected);
  }



  // confetti stuff for win

 const canvasStyle = {
    position: "relative",
    PointerEvent: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
   };


  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance)=> {
    refAnimationInstance.current = instance;
  }, [])

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio)
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    });

    makeShot(0.2, {
      spread: 60
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    });
  }, [makeShot]);



  

  const startGame = () => {
    // when game starts, random opponent character is chosen
    chooseCompChar();
    // and display message changes to prompt player's first turn
    setDisplayMessage('Select a question from the options below:')
  }

  
  const chooseCompChar = () => {
    // get random number between 0 and 14
    let rand = Math.floor(Math.random() * characterList.length);
    // sets the computerCharacter to the character at position random index no. 
    setComputerCharacter(characterList[rand]);
  }


  function playWin() {
        if(displayMessage.contains("Congratulations")) {
    setPlayerTurn(null)
    }
  }

  const makeGuess = (guess) => {
    // setGuessCharacter(guess);
    // setDisplayMessage(`You are guessing ${guessCharacter.name}`)
    if (computerCharacter.name !== ""){
      if(guess.id === computerCharacter.id){
        setGameWon('player');
        setDisplayMessage(`Congratulations, it was ${guess.name}!`);
        fire()
        var audio = new Audio('../win.mp3');
        audio.play();
        playWin();

      // } else if (guessCharacter.name === ""){
      } else {
        setDisplayMessage(`${guess.name} is incorrect, try again`);
        setRemainingCharacters(remainingCharacters.filter(c => c.id !== guess.id));
        setPlayerTurn('computer');
      }
    }
  }



//uncommented comparequerytoboard
//made timeout for this
  const runComputerTurn = async () => {
    // if (playerTurn === 'computer') {
      setDisplayMessage("Computer's turn");
      if (remainingComputerCharacters.length <= 4){
        computerGuessAnswer();
      } else {
        await makeRandomQuestion();
        compareQueryToBoard();
      }
    if (gameWon === '') {
      setTimeout(() => {
        setPlayerTurn('player');
        setDisplayMessage("Your turn to ask a question");
      }, 4000)
    } else if (gameWon === 'computer') {setDisplayMessage('ding dong')}
  }

  function playLose() {
    if(displayMessage.contains("you lose")) {

    setPlayerTurn(null)
    }

  }

  const computerGuessAnswer = () => {
    console.log('guessing');
    let newGuess = remainingComputerCharacters[Math.floor(Math.random() * remainingComputerCharacters.length)]
    console.log(newGuess);
    if (newGuess.id === chosenCharacter.id){
      setGameWon('computer');
      setDisplayMessage(`The AI guessed ${chosenCharacter.name}, you lose!`);
              var audio = new Audio('../fail.mp3');
    audio.play();
      playLose();

    } else {
      setRemainingComputerCharacters(remainingComputerCharacters.filter(c => c.id !== newGuess.id));
    }
  }



  const  makeRandomQuestion = () => {
    let random = Math.floor(Math.random() * computerQuestions.length);
    let computerQuery = computerQuestions[random];
    console.log(computerQuery);
    setDisplayQuestionMessage(compQuestions[random].message)
    setTimeout(() => {
      setDisplayQuestionMessage("")
    }, 3000);
    sendQueryRequest(computerQuery);
    // filter computer questions array and make a new array that 
    setComputerQuestions(computerQuestions.filter(query => query !== computerQuery))
  }
    
  const sendQueryRequest = (option) => {
    console.log('sending');
    fetch(`http://localhost:8080/chars/features/${option}`)
    .then(response => response.json())
    .then(questionCharacters =>{
      if (playerTurn === 'player'){
        setQueryCharacters(questionCharacters)
      } else if (playerTurn === 'computer'){
        setComputerQueryCharacters(questionCharacters)
        console.log(questionCharacters);
        console.log('setting pc query chars');
      }
    })
    .catch(error => console.error(error))
  }
  
  // this method works
  const compareQueryToBoard = () => {
    console.log('comparing');
    let isTrue = false;
    if (playerTurn === 'player') {
      console.log('comparing for player turn');
      for (const char of queryCharacters){
        // for each of the chars returned by the query, see if any of them are the opponent's char. If they are, the query is true, else is false.
        if (char.name === computerCharacter.name){
          isTrue = true;
        }
      }
      removeCharactersFromRemaining(isTrue);
    }
    else {
      console.log('comparing for computer turn');
      for (const char of computerQueryCharacters){
        // for each of the chars returned by the query, see if any of them are the opponent's char. If they are, the query is true, else is false.
        if (char.name === chosenCharacter.name){
          isTrue = true;
        }
      }
        removeComputerCharactersFromRemaining(isTrue);
      }
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
      setRemainingCharacters(filteredArr);
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
      setRemainingCharacters(filteredArr);
    }
  }

  const removeComputerCharactersFromRemaining = isTrue => {
    console.log('running remove comp characters');
    if (isTrue){
      // if the query was true,remove characters from remainingCharacters that are not in queryCharacters
      let filteredArr = remainingComputerCharacters.filter(c => {
        let present = false;
        // each c of remaining characters...
        for (const char of computerQueryCharacters){
          // ...is checked to see if it is in the queryCharacters.
          if (c.name === char.name){
            // if it is in Q.C., then the filter is returned true and the char stays in the remaining characters, if not then they are removed
            present = true;
          }
        }
        return present;
      })
      console.log(filteredArr);
      setRemainingComputerCharacters(filteredArr);
      console.log(remainingComputerCharacters + 'remaining PC chars');
    } else {
      // If opponent is not in query
      let filteredArr = remainingComputerCharacters.filter(c => {
        let present = true;
        // each c of remaining characters...
        for (const char of computerQueryCharacters){
          // ...is checked to see if it is in the queryCharacters.
          if (c.name === char.name){
            // if it is in Q.C., then the filter is returned false and the char is removed from the remaining characters, else they stay in remain
            present = false;
          }
        }
        return present;
      })
      console.log(filteredArr);
      setRemainingComputerCharacters(filteredArr);
    }
  }


  useEffect(fetchRandomCharacters, []);
  useEffect(() => sendQueryRequest(queryOption), [queryOption]);
  useEffect(() => {if (playerTurn === 'computer'){setTimeout(runComputerTurn, 1000)}}, [playerTurn]);
  useEffect(() => compareQueryToBoard(), [computerQueryCharacters]);
  
  return (
    <>
      <div className="game_title">
      <h1 className="game_title_text">??Guess Who??</h1>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyle}/>
      </div>
      <TopBarContainer compareQueryToBoard={compareQueryToBoard} resetGame={resetGame} playerTurn={playerTurn} displayMessage={displayMessage} setDisplayMessage={setDisplayMessage} startGame={startGame} chosenCharacter={chosenCharacter} setQueryOption={setQueryOption} makeGuess={makeGuess} setPlayerTurn={setPlayerTurn} runComputerTurn={runComputerTurn} displayQuestionMessage={displayQuestionMessage} setDisplayQuestionMessage={setDisplayQuestionMessage} setIsGuessing={setIsGuessing}/>
      <div className='entireGame'>
      <BoardContainer gameWon={gameWon} remainingCharacters={remainingCharacters} characterList={characterList} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter} makeGuess={makeGuess} isGuessing={isGuessing} setIsGuessing={setIsGuessing}/>
      <PlayerContainer  characterList={characterList} queryCharacters={queryCharacters} chosenCharacter={chosenCharacter} startGame={startGame} setQueryOption={setQueryOption} remainingComputerCharacters={remainingComputerCharacters}/>
      {/* <h2>Your character is: {chosenCharacter.name}</h2>*/}

      </div>
      <h2>PC character is: {computerCharacter.name}</h2> 
    </>
  );
}

export default App;

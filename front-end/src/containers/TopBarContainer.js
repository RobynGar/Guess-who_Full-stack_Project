import { useState, useEffect } from "react";
import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, resetGame, displayMessage, playerTurn, startGame, chosenCharacter, setQueryOption, setDisplayMessage, makeGuess, setPlayerTurn, runComputerTurn, displayQuestionMessage, setDisplayQuestionMessage, setIsGuessing}) => {


    const[questionColour, setQuestionColour] = useState("grey")

    const handleStartClick = () => {
        if (chosenCharacter.name !== ""){
            startGame();
        }
        else {
            alert("Choose a character before you start!")
        }

    }
    // const handleGuessSubmitClick= () => {
    //     makeGuess();

    // }
    const handleGuessClick = () => {
        setDisplayMessage('Click on a character then make a guess')
        setIsGuessing(true);
    }

    const handleResetClick = () => {
        resetGame();
    }


    // const handleCardClick = () => {
    //     if (computerCharacter.name !== ""){
    //         makeGuess(character);
    //     } else {
    //         choosePlayerCharacter(character);
            
    //     }
    // }

    /*
    const checkEliminated = () => {
        setEliminatedClass('eliminated')
        for (const char of remainingCharacters){
            if (char.name === character.name){
                setEliminatedClass('')
            }
        }
    }
    */ 

    const fontQuestionColour = () => {
        if(playerTurn === "player") {
            setQuestionColour("grey")
        }
        else if (playerTurn === "computer"){
            setQuestionColour("red")
        }
    }

    useEffect(() => fontQuestionColour(), [playerTurn])

    return (
        <div id='questionForm'>
            <h2>{displayMessage}</h2>
             <h3 className={`${questionColour}`}>{displayQuestionMessage}</h3>
            <QuestionForm compareQueryToBoard={compareQueryToBoard} playerTurn={playerTurn} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage} setPlayerTurn={setPlayerTurn} runComputerTurn={runComputerTurn} setDisplayQuestionMessage={setDisplayQuestionMessage} chosenCharacter={chosenCharacter}/>
            <button className= "buttons" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons" onClick={() => handleGuessClick()}>Make Guess</button>
            <button className= "buttons" onClick={() => handleResetClick()}>Reset Game</button>
        </div>
        
    )
}

export default TopBarContainer;
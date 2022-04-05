import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, resetGame, displayMessage, playerTurn, startGame, chosenCharacter, setQueryOption, setDisplayMessage, makeGuess, setPlayerTurn, runComputerTurn, displayComputerMessage, setDisplayComputerMessage, setIsGuessing}) => {



    const handleStartClick = () => {
        if (chosenCharacter.name !== ""){
            startGame();
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


    

    return (
        <div id='questionForm'>
            <h2>{displayMessage}</h2>
             <h3>{displayComputerMessage}</h3>
            <QuestionForm compareQueryToBoard={compareQueryToBoard} playerTurn={playerTurn} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage} setPlayerTurn={setPlayerTurn} runComputerTurn={runComputerTurn}/>
            <button className= "buttons" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons" onClick={() => handleGuessClick()}>Make Guess</button>
            <button className= "buttons" onClick={() => handleResetClick()}>Reset Game</button>
        </div>
        
    )
}

export default TopBarContainer;
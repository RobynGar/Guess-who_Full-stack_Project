import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, resetGame, displayMessage, playerTurn, startGame, chosenCharacter, setQueryOption, setDisplayMessage, makeGuess, setPlayerTurn, runComputerTurn}) => {


    const handleStartClick = () => {
        if (chosenCharacter.name !== ""){
            startGame();
        }

    }
    const handleGuessClick = () => {
        setDisplayMessage('Click on a character you wish to guess')
        // if(makeGuess.name !== ""){console.log(makeGuess.name);
        //    makeGuess(); 
        // }
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
            <QuestionForm compareQueryToBoard={compareQueryToBoard} playerTurn={playerTurn} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage} setPlayerTurn={setPlayerTurn} runComputerTurn={runComputerTurn}/>
            <button className= "buttons" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons" onClick={() => handleGuessClick()}>Make Guess</button>
            <button className= "buttons" onClick={() => handleResetClick()}>Reset Game</button>
        </div>
        
    )
}

export default TopBarContainer;
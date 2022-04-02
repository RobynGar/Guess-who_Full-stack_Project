import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, displayMessage, startGame, chosenCharacter, setQueryOption, setDisplayMessage, makeGuess}) => {


    const handleStartClick = () => {
        if (chosenCharacter.name !== ""){
            startGame();
        }
    }
    const handleGuessClick = () => {
        if(makeGuess.name !== ""){
           makeGuess(); 
        }
    }

    return (
        <div id='questionForm'>
            <h2>{displayMessage}</h2>
            <QuestionForm compareQueryToBoard={compareQueryToBoard} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage}/>
            <button className= "buttons" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons" onClick={() => handleGuessClick()}>Make Guess</button>
        </div>
        
    )
}

export default TopBarContainer;
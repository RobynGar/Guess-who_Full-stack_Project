import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, displayMessage, startGame, chosenCharacter, setQueryOption, setDisplayMessage, setIsGuessing}) => {


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
            <QuestionForm compareQueryToBoard={compareQueryToBoard} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage}/>
            <button className= "buttons" onClick={() => handleStartClick()}>Start game</button>
            <button className= "buttons" onClick={() => handleGuessClick()}>Make Guess</button>
        </div>
        
    )
}

export default TopBarContainer;
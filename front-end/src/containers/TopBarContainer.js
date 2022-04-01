import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({compareQueryToBoard, displayMessage, startGame, chosenCharacter, setQueryOption, setDisplayMessage}) => {


    const handleStartClick = () => {
        if (chosenCharacter.name !== ""){
            startGame();
        }
    }

    return (
        <div id='questionForm'>
            <h2>{displayMessage}</h2>
            <QuestionForm compareQueryToBoard={compareQueryToBoard} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage}/>
            <button onClick={() => handleStartClick()}>Start game</button>
        </div>
        
    )
}

export default TopBarContainer;
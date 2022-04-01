import QuestionForm from "../components/QuestionForm";

const TopBarContainer = ({displayMessage, startGame, chosenCharacter, setQueryOption, setDisplayMessage}) => {


    const handleStartClick = () => {
        console.log(chosenCharacter.name);
        if (chosenCharacter.name !== ""){
            startGame();
        }
    }

    return (
        <div id='questionForm'>
            <h2>{displayMessage}</h2>
            <QuestionForm setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage}/>
            <button onClick={() => handleStartClick()}>Start game</button>
        </div>
        
    )
}

export default TopBarContainer;
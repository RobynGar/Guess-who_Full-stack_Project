import ChosenCharacter from "../components/ChosenCharacter";
import PlayerSection from "../components/PlayerSection";
import QuestionForm from "../components/QuestionForm";

const PlayerContainer = ({characterList, queryCharacters, chosenCharacter, startGame}) => {
    
    const handleStartClick = () => {
        console.log(chosenCharacter.name);
        if (chosenCharacter.name !== ""){
            startGame();
        }
    }
    
    
    return (
    <>
    <ChosenCharacter />
    <PlayerSection />
    <QuestionForm />
    {/* <form onSubmit={handleFormSubmit} > */}
    <button onClick={() => handleStartClick()}>Start game</button>
    {/* </form> */}
    </>
    );

}
export default PlayerContainer;
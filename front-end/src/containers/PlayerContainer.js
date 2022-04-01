import ChosenCharacter from "../components/ChosenCharacter";
import PlayerSection from "../components/PlayerSection";
import QuestionForm from "../components/QuestionForm";
import CharacterCard from "../components/CharacterCard";


const PlayerContainer = ({characterList, character, queryCharacters, choosePlayerCharacter, chosenCharacter, startGame, setQueryOption}) => {
    
    const handleStartClick = () => {
        console.log(chosenCharacter.name);
        if (chosenCharacter.name !== ""){
            startGame();
        }
    }
    
    // const chosenCharacterMap = () => characterList.map(char => {
    //     if (char.id === chosenCharacter.id){
    //     return <CharacterCard className="containerItems" character={character} key={character.id}/>
    //     }
    // })

    // const characterMap = characterList.map((character, index) => {
    //     return <CharacterCard id={index} className="containerItems" character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter}/>
    // })
    
   

    

    return (
    <>
    <div id='playerContainer'>
        <div id='topSection'>
            <ChosenCharacter  chosenCharacter={chosenCharacter} />
            <PlayerSection />
        </div>
        <div id='questionForm'>
            <h4>Ask your Questions below</h4>
            <QuestionForm />
            <hr />
            <button className="start_game_button" onClick={() => handleStartClick()}>Start game</button>
        </div> 
    </div>
    </>
    );

}
export default PlayerContainer;
import ChosenCharacter from "../components/ChosenCharacter";
import PlayerSection from "../components/PlayerSection";
import QuestionForm from "../components/QuestionForm";
import CharacterCard from "../components/CharacterCard";


const PlayerContainer = ({characterList, character, queryCharacters, choosePlayerCharacter, chosenCharacter, setQueryOption}) => {
    
    
    
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
        <ChosenCharacter  chosenCharacter={chosenCharacter} />
        <PlayerSection />
    </div>
    </>
    );

}
export default PlayerContainer;
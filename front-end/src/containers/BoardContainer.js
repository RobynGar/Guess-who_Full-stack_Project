import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, choosePlayerCharacter, computerCharacter, remainingCharacters, makeGuess}) => {
    



    const characterMap = characterList.map((character, index) => {

        

        return <CharacterCard id={index} remainingCharacters={remainingCharacters} character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter} makeGuess={makeGuess}/>
    })
    
    
    

    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
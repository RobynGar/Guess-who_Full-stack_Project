import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, queryCharacter, character, choosePlayerCharacter, chosenCharacter}) => {
    
    const characterMap = characterList.map((character, index) => {
        return <CharacterCard id={index} className="containerItems" character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} setChosenCharacter={chosenCharacter} />
    })
    
    
    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
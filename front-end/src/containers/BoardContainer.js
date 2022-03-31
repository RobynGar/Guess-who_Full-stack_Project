import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, queryCharacter, choosePlayerCharacter}) => {
    
    const characterMap = characterList.map((character, index) => {
        return <CharacterCard id={index} className="containerItems" character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} />
    })
    
    
    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
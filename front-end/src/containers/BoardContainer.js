import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, queryCharacter, choosePlayerCharacter, computerCharacter}) => {
    
    const characterMap = characterList.map((character, index) => {
        return <CharacterCard id={index} className="containerItems" character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter}/>
    })
    
    
    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
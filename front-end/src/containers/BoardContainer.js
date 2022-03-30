import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, queryCharacter, character}) => {
    
    const characterMap = characterList.map((character, index) => {
        return <CharacterCard id={index} className="containerItems" characterCard={character} key={character.id}/>
    })
    
    
    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
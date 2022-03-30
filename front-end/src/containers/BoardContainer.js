import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, queryCharacter, character}) => {
    
    const characterMap = characterList.map(character => {
        return <CharacterCard characterCard={character} key={character.id}/>
    })
    
    
    return (
    <>
        {characterMap}
    </>
    );

}
export default BoardContainer;
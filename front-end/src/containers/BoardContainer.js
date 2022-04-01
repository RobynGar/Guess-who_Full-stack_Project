import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, choosePlayerCharacter, computerCharacter, remainingCharacters}) => {
    



    const characterMap = characterList.map((character, index) => {

        

        return <CharacterCard id={index} remainingCharacters={remainingCharacters} className='containerItems' character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter}/>
    })
    
    
    

    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
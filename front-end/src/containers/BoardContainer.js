import CharacterCard from "../components/CharacterCard";

const BoardContainer = ({characterList, gameWon, choosePlayerCharacter, computerCharacter, remainingCharacters, makeGuess}) => {
    



    const characterMap = characterList.map((character, index) => {
        return <CharacterCard id={index} remainingCharacters={remainingCharacters} gameWon={gameWon} className='containerItems' character={character} key={character.id} choosePlayerCharacter={choosePlayerCharacter} computerCharacter={computerCharacter} makeGuess={makeGuess}/>
    })
    
    
    

    return (
    <section className = "boardContainer">
        {characterMap}
    </section>
    );

}
export default BoardContainer;
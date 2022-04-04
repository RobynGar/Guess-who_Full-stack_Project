import MiniCharacterCard from "./MiniCharacterCard";
const MiniBoard = ({characterList, remainingComputerCharacters}) => {

    const generateMiniBoard = characterList.map ((char, index) => {
        return <MiniCharacterCard remainingComputerCharacters={remainingComputerCharacters} character={char} key={index}/>
    })

    return(

        <section>
            {generateMiniBoard}
        </section>
    )

}

export default MiniBoard;
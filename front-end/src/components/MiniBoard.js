import { useEffect } from "react";
import MiniCharacterCard from "./MiniCharacterCard";
const MiniBoard = ({characterList, remainingComputerCharacters}) => {

    const generateMiniBoard = characterList.map ((char, index) => {
        return <MiniCharacterCard remainingComputerCharacters={remainingComputerCharacters} character={char} id={index} key={char.id}/>
    })



    // useEffect(generateMiniBoard(), [remainingComputerCharacters])
    return(

        <section className="miniBoardContainer">
            {generateMiniBoard}
        </section>
    )

}

export default MiniBoard;
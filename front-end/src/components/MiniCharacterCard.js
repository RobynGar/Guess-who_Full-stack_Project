import { useEffect, useState } from "react";

const MiniCharacterCard = ({remainingComputerCharacters, character}) => {

    const [eliminatedClass, setEliminatedClass] = useState("")

    const checkEliminated = () => {
        setEliminatedClass('mini-eliminated')
        for (const char of remainingComputerCharacters){
            if (char.name === character.name){
                console.log('not eliminated');
                setEliminatedClass('')
            }
        }
    }

    useEffect(()=> {
        checkEliminated()
        
    },[remainingComputerCharacters])

    return (
        <div className={`miniCard ${eliminatedClass}`}>
            <img src='../images/thinkEmoji2.png'/>
        </div>
    )
}

export default MiniCharacterCard;
import { useEffect, useState } from "react";

const MiniCharacterCard = ({remainingComputerCharacters, character}) => {

    const [eliminatedClass, setEliminatedClass] = useState("")
    let imgSource = `../images/${character.name}.png`;

    const checkMiniEliminated = () => {
        console.log('checking');
        setEliminatedClass('mini-eliminated')
        for (const char of remainingComputerCharacters){
            if (char.name === character.name){
                console.log(character.name + ' not eliminated');
                setEliminatedClass('')

            }
        }
    }
    
    // const checkEliminated = () => {
    //     let temp = 'mini-eliminated';
    //     for (const char of remainingComputerCharacters){
    //         if (char.name === character.name){
    //             console.log(character.name + ' not eliminated');
    //             // setEliminatedClass('')
    //             temp = '';
    //             break;
    //         } else if (char.name !== character.name){
    //             console.log(character.name + '  elim');}
    //     }
    //     setEliminatedClass(temp)
    // }

    useEffect(() => checkMiniEliminated(),[remainingComputerCharacters])

    return (
        <div className={`miniCard board ${eliminatedClass}`}>
            {/* <img className="card_image" src='../images/thinkEmoji2.png'/> */}
            {/* <img className="card_image" src={imgSource} alt="not found"/> */}
            <p>{character.name}</p>
        </div>
    )
}

export default MiniCharacterCard;
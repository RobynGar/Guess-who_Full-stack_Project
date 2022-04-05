import { useState, useEffect } from "react";

const CharacterCard = ({character, gameWon, choosePlayerCharacter, computerCharacter, remainingCharacters, makeGuess, isGuessing, setIsGuessing}) => {
    
    const imgSource = `../images/${character.name}.png`
    const [eliminatedClass, setEliminatedClass] = useState('');
    const [winnerClass, setWinnerClass] = useState('');


    // when remainingCharacters changes, check to see if character has been eliminated, if it hasn't then it is not given eliminated class. Has to be set then unset for not eliminated just because
    const checkEliminated = () => {
        setEliminatedClass('eliminated')
        for (const char of remainingCharacters){
            if (char.name === character.name){
                setEliminatedClass('')
            }
        }
    }

    const checkWinner = () => {
        if (gameWon === 'player' && character.name === computerCharacter.name) {
                setWinnerClass('winner');
            
        }
    }

    // if game has not started (computer character has not been assigned), then can change player character by clicking on other cards
    const handleCardClick = () => {
        if (computerCharacter.name === ""){
            choosePlayerCharacter(character);
            

        } else if(isGuessing) {
            // setGuessCharacter(character);
            makeGuess(character)
            setIsGuessing(false);
            console.log(isGuessing);
        } else{
            console.log('rejected');
        }
    }
    

    useEffect(() => checkEliminated(), [remainingCharacters])
    useEffect(()=> checkWinner(), [gameWon])

    return(
        <div className={`board font ${eliminatedClass} ${winnerClass}`}  onClick = {() => handleCardClick()}>
                <img className="card_image" src={imgSource} alt="not found"/>
                <h4>{character.name}</h4> 
        </div>
        
    )
}

export default CharacterCard;
import { useState, useEffect } from "react";

const CharacterCard = ({character, choosePlayerCharacter, computerCharacter, remainingCharacters, makeGuess}) => {
    
    const imgSource = `../images/${character.name}.png`
    const [eliminatedClass, setEliminatedClass] = useState('');

    // when remainingCharacters changes, check to see if character has been eliminated, if it hasn't then it is not given eliminated class. Has to be set then unset for not eliminated just because
    const checkEliminated = () => {
        setEliminatedClass('eliminated')
        for (const char of remainingCharacters){
            if (char.name === character.name){
                console.log('not eliminated');
                setEliminatedClass('')
            }
        }
    }

    // if game has not started (computer character has not been assigned), then can change player character by clicking on other cards
    const handleCardClick = () => {
        if (computerCharacter.name !== ""){
            // makeGuess(character);
        } else {
            choosePlayerCharacter(character);
            
        }
    }
    

    useEffect(() => checkEliminated(), [remainingCharacters])

    return(
        <div className={`board font ${eliminatedClass}`}  onClick = {() => handleCardClick()}>
                <img className="card_image" src={imgSource} alt="not found"/>
                <h4>{character.name}</h4> 
        </div>
        
    )
}

export default CharacterCard;
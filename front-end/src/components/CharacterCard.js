const CharacterCard = ({character, choosePlayerCharacter, computerCharacter}) => {
    
    const imgSource = `../images/${character.name}.png`

    const handleCardClick = () => {
        if (computerCharacter.name !== ""){
            
        } else {
            choosePlayerCharacter(character);
        }
    }

    return(
        <div className="board font"  onClick = {() => handleCardClick()}>
                <img className="card_image" src={imgSource} alt="not found"/>
                <h4>{character.name}</h4> 
        </div>
        
    )
}

export default CharacterCard;
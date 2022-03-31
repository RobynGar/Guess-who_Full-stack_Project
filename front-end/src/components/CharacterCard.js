const CharacterCard = ({character, choosePlayerCharacter}) => {
    
    const imgSource = `../images/${character.name}.png`

    return(
        <div className="board" >
                <img className="card_image" src={imgSource} alt="not found" onClick = {() => choosePlayerCharacter(character)}/>
                <h4>{character.name}</h4> 
        </div>
        
    )
}

export default CharacterCard;
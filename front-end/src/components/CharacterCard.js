const CharacterCard = ({characterCard}) => {
    
    const imgSource = `../images/${characterCard.name}.png`

    return(
        <div className="board">
                <img className="card_image" src={imgSource} alt="not found"/>
                <h4>{characterCard.name}</h4> 
        </div>
        
    )
}

export default CharacterCard;
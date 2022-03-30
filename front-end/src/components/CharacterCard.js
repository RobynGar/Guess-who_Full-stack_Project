const CharacterCard = ({characterCard}) => {
    
    const imgSource = `../images/${characterCard.name}.png`

    return(
        <figure >
            <img className="card_image" src={imgSource} alt="not found"/>
            <figcaption>{characterCard.name}</figcaption> 
        </figure>
    )
}

export default CharacterCard;
import { useEffect, useState } from "react";


const ChosenCharacter = ({chosenCharacter}) => {

    const [outputCard, setOutputCard] = useState([]);
    const imgsrc = `../images/${chosenCharacter.name}.png`;

    const createPlayerCard = () => {
        setOutputCard(<div>
            <img src={imgsrc} alt="not found"></img>
        </div>
            
        )}

    useEffect(createPlayerCard, [chosenCharacter]);    

    return(
        <>
        <div>
        {outputCard}
        </div>
        </>
    )
}

export default ChosenCharacter;
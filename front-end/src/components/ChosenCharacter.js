import { useEffect, useState } from "react";

// passing chosen character as a prop
const ChosenCharacter = ({chosenCharacter}) => {

    // assigning an empty array as outputCard for when we click on an avatar
    const [outputCard, setOutputCard] = useState([]);

    // assigning the chosen image 
    const imgsrc = `../images/${chosenCharacter.name}.png`;

    // function to update the output card to the image that had just been clicked on by the player
    // in line 17, we're calling on to imgsrc as the updated output card 
    const createPlayerCard = () => {
        // if else statement so that if character has not been chosen display anonymous default img
        // else display chosen character
        if(chosenCharacter.name === ""){
            setOutputCard(
            <div className='anon font'>
                <h4>Character not chosen</h4>
               <img className="chosen-image" src ="../images/anonymous.png" alt="anon"></img>
            </div>)
        }
        else{setOutputCard(
            <div className='output-card font'>
                <h4>Your chosen character:</h4>
                <img className="chosen-image" src={imgsrc} alt="not found"></img>
                <h3>{chosenCharacter.name}</h3>
            </div>)
        
            
    }}

    // we rerender the function only every time a character is chosen 
    useEffect(createPlayerCard, [chosenCharacter]);    

    return(
        <>
       
        {outputCard}
        
        </>
    )
}

export default ChosenCharacter;
import { useState } from "react"
import QuestionList from "./QuestionList"
import { questions } from "./questions"



const QuestionForm = ({compareQueryToBoard, playerTurn, setQueryOption, setDisplayMessage, setPlayerTurn, runComputerTurn, setDisplayQuestionMessage}) => {   // this is like our navBar


    const depthLevel = 0;

    const submitQuestion = () => {
        //should change display message to '....' then a setTimer for 1 second then display message to 'True!' or 'False!' with another timer before editing the player cards if they are eliminated. Will look jarring if it all just happens instantly.
        // when they click submit, runs the compareQuery method in App.js
        compareQueryToBoard();
        setTimeout(() => {
      setDisplayQuestionMessage("")
      setPlayerTurn('computer');
    }, 1000);
        
        // console.log('changing to computer turn');
        // runComputerTurn();
        // console.log('pc did its turn');
    }


    return (
        <>
        <ul className="questions" id="questionButton">{questions.map((question, index) => {  // questions = menuItems
            return <QuestionList setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage} options={question} key={index} depthLevel={depthLevel} setDisplayQuestionMessage={setDisplayQuestionMessage}/>    // QuestionList = MenuItems
            // create a prop called options which takes our questions.js
        })}
        </ul>
        <button type="button" className="buttons" onClick={() => submitQuestion()}>Ask question!</button>
        </>
    )
}


export default QuestionForm;







    // follow up options to filter characters
    // const [moreOptions, setMoreOptions] = useState([])

    // const handleMoreOptions = (event) => {
    //     // gets the value that has been selected 

    //     //ToDo: add if else statement for different questions and their diff dropdown options
    //     if (event.target.value === 'hair'){
    //         setMoreOptions(
    //             <form>
    //             <select name="hairDropDown">
    //                 <option value="blonde">Blonde</option>
    //                 <option value="brown">Brown</option>
    //                 <option value="black">Black</option>
    //                 <option value="hijab">Hijab</option>
    //             </select>
    //             </form> 
    //             )
    //     }
    //     else if (event.target.value === 'top'){
    //         setMoreOptions(
    //             <form>
    //             <select name="topDropDown">
    //                 <option value="black">Black</option>
    //                 <option value="white">White</option>
    //                 <option value="red">Red</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    //     else if (event.target.value === 'eyes'){
    //         setMoreOptions(
    //             <form>
    //             <select name="eyesDropDown">
    //                 <option value="blue">Blue</option>
    //                 <option value="brown">Brown</option>
    //                 <option value="green">Green</option>
    //             </select>
    //             </form> 
    //             )
    //     }
    //     else if (event.target.value === 'gender'){
    //         setMoreOptions(
    //             <form>
    //             <select name="genderDropDown">
    //                 <option value="male">Male</option>
    //                 <option value="female">Female</option>
    //             </select>
    //             </form> 
    //             )
    //     }
    //     else if (event.target.value === 'piercings'){
    //         setMoreOptions(
    //             <form>
    //             <select name="piercingsDropDown">
    //                 <option value="true">True</option>
    //                 <option value="false">False</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    //     else if (event.target.value === 'beard'){
    //         setMoreOptions(
    //             <form>
    //             <select name="beardDropDown">
    //                 <option value="true">True</option>
    //                 <option value="false">False</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    //     else if (event.target.value === 'london'){
    //         setMoreOptions(
    //             <form>
    //             <select name="londonDropDown">
    //                 <option value="true">True</option>
    //                 <option value="false">False</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    //     else if (event.target.value === 'pets'){
    //         setMoreOptions(
    //             <form>
    //             <select name="petsDropDown">
    //                 <option value="true">True</option>
    //                 <option value="false">False</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    //     else if (event.target.value === 'hair_accessory'){
    //         setMoreOptions(
    //             <form>
    //             <select name="hair_accessoryDropDown">
    //                 <option value="true">True</option>
    //                 <option value="false">False</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    //     else if (event.target.value === 'glasses'){
    //         setMoreOptions(
    //             <form>
    //             <select name="glassesDropDown">
    //                 <option value="true">True</option>
    //                 <option value="false">False</option>
    //             </select>
    //             </form> 
    //             )
    //     } 
    // }


     {/* <form> */}
            {/* When option is selected, run method to create more options depending on what's been selected */}
        {/* <select name ="questions" onChange = {(event) => handleMoreOptions(event)} >
            <option value="">Select from the options below...</option>
            <option value="hair" >Is their hair:</option> 
            <option value="top">Is their top:</option>
            <option value="eyes">Are their eyes:</option>
            <option value="gender">Is the person:</option>
            <option value="piercings">Do they have piercings:</option>
            <option value="beard">Do they have a beard:</option>
            <option value="london">Do they live in London:</option>
            <option value="pets">Do they have pets:</option>
            <option value="hair_accessory">Do they have a hair accessory:</option>
            <option value="glasses">Do they wear glasses:</option>
        </select> */}
        {/* </form> */}
        {/*  {moreOptions} */}


{/* <select name="choice" onChange={(event) => handleChange(event, setDifficulty)}>
                    {/* <option selected>Select Difficulty</option> */}
                    // <option value="BEGINNER" >Beginner</option>
                    // <option value="INTERMEDIATE">Intermediate</option>
                    // <option value="ADVANCED">Advanced</option>
                // </select> */}
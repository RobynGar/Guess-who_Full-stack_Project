import { useState } from "react"
const QuestionForm = ({}) => {

    const [moreOptions, setMoreOptions] = useState([])

    const hairOptions = (event) => {
        console.log(event.target.value);
        // setMoreOptions(
        // <form>
        // <select name="hairDropDown">
        //     <option value="blonde">Blonde</option>
        //     <option value="brown">Brown</option>
        //     <option value="black">Black</option>
        //     <option value="hijab">Hijab</option>
        // </select>
        // </form> 
        // )
    }
   

    return (
        <form>
        <select name ="questions" onChange = {(event) => hairOptions(event, setMoreOptions)} >
            <option value="hair" >Is their hair:</option> 
            <option value="top">Is their top:</option>
            <option value="eyes">Are their eyes:</option>
        </select>
        {moreOptions}
        </form>
    )
}

export default QuestionForm;

{/* <select name="choice" onChange={(event) => handleChange(event, setDifficulty)}>
                    {/* <option selected>Select Difficulty</option> */}
                    // <option value="BEGINNER" >Beginner</option>
                    // <option value="INTERMEDIATE">Intermediate</option>
                    // <option value="ADVANCED">Advanced</option>
                // </select> */}
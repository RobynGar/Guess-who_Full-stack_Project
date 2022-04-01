import { useState } from "react";
import Dropdown from "./Dropdown"

const QuestionList = ({options}) => {
    
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="questionOptions">
            {options.submenu
             ? (
                 <>
                 <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev)=>!prev)}>
                     {options.title}{" "}
                 </button>
                 <Dropdown submenu = {options.submenu} dropdown={dropdown}/>
                 </>
             ) : (
                 <button type="button" value="placeholder">{options.title}</button>
             )} 
        </li>
    )

}

export default QuestionList;


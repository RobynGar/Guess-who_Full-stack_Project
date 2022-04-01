import { useState } from "react";
import Dropdown from "./Dropdown"

// MenuItem 
const QuestionList = ({options, depthLevel}) => {
    
    const [dropdown, setDropdown] = useState(false);

    return (
        <li className="questionOptions">
            {options.submenu
             ? (
                 <>
                 <button type="button" aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev)=>!prev)}>
                     {options.title}{" "}
                     {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"/>}
                 </button>
                 <Dropdown submenu = {options.submenu} dropdown={dropdown} depthLevel={depthLevel}/>
                 </>
             ) : (
                 <button type="button" value="placeholder">{options.title}</button>
             )} 
        </li>
    )

}

export default QuestionList;


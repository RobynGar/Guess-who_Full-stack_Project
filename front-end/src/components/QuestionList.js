import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown"

// MenuItem 
const QuestionList = ({options, depthLevel}) => {
    
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    // these two check if screen is monitor or phone, if monitor -> changes when hover on and off
            // if phone -> changes when you click on or off (because you don't have a mouse to hover)
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    useEffect(() => {
        // when dropdown changes, run this method
        const handler = (event) => {
            // if dropdown is open && mouse clicks on something && what it clicks on isn't the same dropdown that is open...
            if (dropdown && ref.current && !ref.current.contains(event.target)){
                // close the old dropdown menu
                setDropdown(false);
        }
        };
        // if mouse hovers over something in menu -> runs handler -> show menu options
        document.addEventListener("mousedown", handler);
        // if press down (on touchscreen) on menu item -> runs handler -> show menu options
        document.addEventListener("touchstart", handler);
        return () => {
            document.addEventListener("mousedown", handler);
            document.addEventListener("touchstart", handler);
        };
    } , [dropdown])
    

    return (
        <li className="questionOptions" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
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


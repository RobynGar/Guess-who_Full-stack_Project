import QuestionList from "./QuestionList";

const Dropdown = ({submenu, dropdown, depthLevel, setQueryOption, setDisplayMessage, setDisplayQuestionMessage}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} `}>
            {submenu.map((sub, index) => (
                // <li key={index} className="questionOptions">
                //     <button type="button" value="placeholder">{sub.title}</button>
                // </li>
                
                <QuestionList options={sub} key={index} depthLevel={depthLevel} setQueryOption={setQueryOption} setDisplayMessage={setDisplayMessage} setDisplayQuestionMessage={setDisplayQuestionMessage}/>
            ))}
        </ul>
    )
}

export default Dropdown;
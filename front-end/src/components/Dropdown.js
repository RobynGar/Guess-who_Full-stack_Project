const Dropdown = ({submenu, dropdown}) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""} `}>
            {submenu.map((sub, index) => (
                <li key={index} className="questionOptions">
                    <button type="button" value="placeholder">{sub.title}</button>
                </li>
            ))}
        </ul>
    )
}

export default Dropdown;
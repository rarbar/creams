import {useState} from "react";

export const Categorise = ({items}) => {


    const [activeItem, setActiveItem] = useState(null)

    const onSelectItems = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItems(null)}>Все
                </li>
                {items && items.map((name, index) => <li
                    className={activeItem === index ? 'active' : ''}
                    onClick={() => onSelectItems(index)}
                    key={`${index}_${name}`}>{name}</li>)}
            </ul>
        </div>

    )
}
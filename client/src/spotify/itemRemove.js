import React from "react"; // Don't forget to import React
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ItemRemove = ({ value, index, removeItem }) => {
    return (
        <li className={value} key={index}>
            {value}
            <button> 
                <FontAwesomeIcon onClick={() => removeItem(index)} icon={faMinus} />
            </button>
        </li>
    );
}

export default ItemRemove;

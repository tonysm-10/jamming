import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Item = ({ value, index, addItem }) => {
    return (
        <li className={value} key={index}>
            {value}
            <button>
                <FontAwesomeIcon onClick={() => addItem(value)} icon={faPlus} />
            </button>
        </li>
    );
}

export default Item;

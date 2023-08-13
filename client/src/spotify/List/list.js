import React from "react"; // Don't forget to import React
import './list.css'
import Item from "../item"; // Make sure to import Item component
import { useState } from "react";
import ItemRemove from "../itemRemove";

const List = () => {
    const [cart, setCart] = useState([
        'item1', 'item2', 'item3'
    ]);

    const [newCart, setNewCart] = useState([])

    const removeItem = (targetIndex) => {
        setNewCart((prev) => {
            return prev.filter((item, index) => index !== targetIndex)
            
        })
    }

    const addItem = (item) => {
        setNewCart((prev) => {
            return [...prev, item]
        })
    }

    const list = cart.map((item, index) => ( 
            <Item 
            index={index} 
            value={item}  
            addItem={addItem} 
            />
    ));

    const newList = newCart.map((item, index) => (
        <ItemRemove 
            key={item.id}  // Use a unique identifier here
            index={index} 
            value={item}  
            removeItem={removeItem} 
        />
    ));
    


    return (
        <div>
            <ul>
                {list}
            </ul>
            
            <ul>
                {newList}
            </ul>
        </div>
    );
}

export default List;

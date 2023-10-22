import React from "react";
export default function ListItem(props){
    return(
        <div className="list--item">
            <h3 className="category"> Category 1</h3>
            <h4 className="amount">₹ 1000</h4>
            <button className="delete-btn">X</button>
        </div>
    )
}
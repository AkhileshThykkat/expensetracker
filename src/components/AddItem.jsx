import React from "react";

export default function AddItem(){
    return(
        <div className="add--item">
            <input type="text" placeholder="Enter new item"  className="input--field"/>
            <button className="add--btn">+</button>

        </div>
    )

}
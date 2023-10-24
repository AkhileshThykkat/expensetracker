import React from "react";

import AddItem from "./AddItem";


export default function MainContent(){
    return(
        <div className="main--content">
            <AddItem/>
            
            

            <button className="clear--btn">Clear all</button>

        </div>
    )
}
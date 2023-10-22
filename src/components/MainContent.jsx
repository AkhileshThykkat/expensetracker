import React from "react";
import ListItem from "./ListItem";
import AddItem from "./AddItem";


export default function MainContent(){
    return(
        <div className="main--content">
            <AddItem/>
            <ListItem/>
            

            <button className="clear--btn">Clear all</button>

        </div>
    )
}
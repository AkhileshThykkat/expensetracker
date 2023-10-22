import React from "react";
import ListItem from "./ListItem";


export default function MainContent(){
    return(
        <div className="main--content">
            <ListItem/>
            <button>Clear all</button>

        </div>
    )
}
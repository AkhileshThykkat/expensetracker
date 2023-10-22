import React from "react";


export default function Header(props){
    return(
        <div className="header">
            <h1 className="title">Expense Tracker</h1>
            <div className="expenses">
            <ul>
                <li>BUDGET : ₹ </li>
                <li>TOTAL : ₹ </li>
                <li>BALANCE : ₹ </li>
               
            </ul>
            </div>
            
        </div>
    )
}
import React from "react";
import './table.css'; 
function DisplayItem(props){

    const {display}= props;


    return (
        <div className={display.category === "Lunch" ?"oddcolor":"evencolor"}>{display.iteamName}</div>
    )
}

export default DisplayItem;
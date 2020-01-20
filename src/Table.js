import React, { useState } from "react";
import './table.css';
 import DisplayItem from "./DisplayItem";

const foods = [{ iteamName: "Brinjal", category: "Lunch", description: "Birnjal with pototo" }, { iteamName: "Tindora", category: "Lunch", description: "tindora with pototo" }, { iteamName: "Papdi", category: "Lunch", description: "Papdi with tometo" }, { iteamName: "Mixveg", category: "Dinner", description: "Mixveg is the all time favriout" }, { iteamName: "Kapoourya", category: "Dinner", description: "Some people are dont like" }, { iteamName: "Handvo", category: "Dinner", description: "All member like this fooditeam" }];
function Table() {


    const [foodToDisplay, setfoodToDisplay] = useState(foods);
    const[display,setDisplay]=useState("");

    function search(category) {
        if (category === "Lunch") {
            const lunchResult = foods.filter((foodobj) => foodobj.category === "Lunch");
            setfoodToDisplay(lunchResult);
        }
        else {
            const dinnerResult = foods.filter((foodObj) => foodObj.category === "Dinner");
            setfoodToDisplay(dinnerResult);
        }

    }
   function resetdata(){
     const result=foods;
     setfoodToDisplay(result);
    
   }
   function displayRowClick(foodObj){
    
     const display=foodObj;
     setDisplay(display);
 
   }
    return (
        <div className="Table">
            <div className="Title" >
                <p>This is a Table</p>


                <DisplayItem display={display} />
    
            </div>
            <div>
                <button type="button" onClick={() => search("Lunch")}>Lunch</button>
                <button type="button" onClick={() => search("Dinner")}>Dinner</button>
                <button type="button" onClick={resetdata}>Reset</button>
            </div>
            <div className="Heading">
                <div className="Cell">
                    <p>IteamName</p>
                </div>
                <div className="Cell">
                    <p>Category</p>
                </div>
                <div className="Cell">
                    <p>Description</p>
                </div>
            </div>

            {foodToDisplay.map((foodObj,index) => {
                return <div key={index} className={foodObj.category === "Lunch" ?"Row oddcolor":"Row evencolor"} onClick={()=>displayRowClick(foodObj)}> 
                    <div className="Cell">
                     {foodObj.iteamName}
                    </div>
                    <div className="Cell">
                        {foodObj.category}
                    </div>
                    <div className="Cell">
                        {foodObj.description}
                    </div>
                </div>
            })}


        </div>

    );
}

export default Table;
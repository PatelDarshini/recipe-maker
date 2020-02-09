import React, { useState } from "react";
import "./table.css";
import DisplayItem from "./DisplayItem";

const foods = [
  {
    iteamName: "Brinjal",
    category: "Lunch",
    description: "Birnjal with pototo"
  },
  {
    iteamName: "Tindora",
    category: "Lunch",
    description: "tindora with pototo"
  },
  { iteamName: "Papdi", category: "Lunch", description: "Papdi with tometo" },
  {
    iteamName: "Mixveg",
    category: "Dinner",
    description: "Mixveg is the all time favriout"
  },
  {
    iteamName: "Kapoourya",
    category: "Dinner",
    description: "Some people are dont like"
  },
  {
    iteamName: "Handvo",
    category: "Dinner",
    description: "All member like this fooditeam"
  }
];
function Table() {
  const [foodToDisplay, setfoodToDisplay] = useState(foods);

  //const selectedarray=[];
  const [selectedArray, setSelectedArray] = useState([]);

  function rowSelected(index) {
    let array = [...selectedArray];
    console.log("prev", array);
    if (array.includes(index)) {
      const arrayIndex = array.indexOf(index);
      array.splice(arrayIndex, 1);
    } else {
      array.push(index);
    }
    console.log("next", array);
    setSelectedArray(array);
  }

  function reset() {
    setSelectedArray([]);
  }
  return (
    <div className="Table">
      <div className="Title">
        <p>This is a Table</p>
      </div>
      <div>
        <button type="button" onClick={reset}>
          Reset
        </button>
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

      {foodToDisplay.map((foodObj, index) => {
        return (
          <div
            key={index}
            onClick={() => rowSelected(index)}
            className={
              selectedArray.includes(index)
                ? "Row rowSeletedcolor"
                : "Row rowNotSelectedcolor"
            }
          >
            <div className="Cell">{foodObj.iteamName}</div>
            <div className="Cell">{foodObj.category}</div>
            <div className="Cell">{foodObj.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Table;

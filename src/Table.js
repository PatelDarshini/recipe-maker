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
    description: "Mixveg is the all time favourite"
  },
  {
    iteamName: "Kapoourya",
    category: "Dinner",
    description: "Some people dont like"
  },
  {
    iteamName: "Handvo",
    category: "Dinner",
    description: "All member like this food iteam"
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
        <h1 style={{ textAlign: "center" }}>Food Items</h1>
      </div>
      <div className="resetbuttondiv">
        <button type="button" onClick={reset}>
          <span role="img">🚫</span> Reset
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

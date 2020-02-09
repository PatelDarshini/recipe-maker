import React, { useState } from "react";
import "./recipeMaker.css";

function RecipeMaker() {
  const recipes = [];
  const [recipeToDisplay, setrecipeToDisplay] = useState(recipes);
  function buttonOnclick(prop) {
    const recipeModifiedArray = [...recipeToDisplay];
    recipeModifiedArray.push(prop);
    setrecipeToDisplay(recipeModifiedArray);
    console.log(recipeModifiedArray);
  }
  return (
    <>
      <div className="buttonMaster">
        <button
          type="button"
          className="oilbutton"
          onClick={() => buttonOnclick("Oil")}
        >
          Oil
        </button>
        <button
          type="button"
          className="waterbutton"
          onClick={() => buttonOnclick("Water")}
        >
          Water
        </button>
        <button
          type="button"
          className="vegitablebutton"
          onClick={() => buttonOnclick("Vegitable")}
        >
          Vegitable
        </button>
        <button
          type="button"
          className="spicesbutton"
          onClick={() => buttonOnclick("Spices")}
        >
          Spices
        </button>
      </div>

      <div className="container">
        {recipeToDisplay.map((recipeObj, index) => {
          console.log(recipeObj);
          return (
            <div key={index} className="innerdiv">
              {recipeObj}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default RecipeMaker;

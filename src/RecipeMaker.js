import React, { useState } from "react";
import "./recipeMaker.css";

function RecipeMaker() {
  const recipes = [];
  const [recipeToDisplay, setrecipeToDisplay] = useState(recipes);
  function buttonOnclick(prop) {
    console.log(prop);
    const recipeModifiedArray = [...recipeToDisplay];
    recipeModifiedArray.push(prop);
    setrecipeToDisplay(recipeModifiedArray);
    console.log({ recipeModifiedArray });
  }
  function reset() {
    setrecipeToDisplay([]);
  }
  return (
    <>
      <div className="buttonMaster">
        <button
          type="button"
          className="oilbutton"
          onClick={() =>
            buttonOnclick({ Name: "Oil", Color: "#F2E1A6", emogi: "🛢️" })
          }
        >
          <span role="img"> 🛢️ </span>Oil
        </button>
        <button
          type="button"
          className="waterbutton"
          onClick={() =>
            buttonOnclick({ Name: "Water", Color: "#A6E4F2", emogi: "💦" })
          }
        >
          <span role="img">💦</span> Water
        </button>
        <button
          type="button"
          className="vegitablebutton"
          onClick={() =>
            buttonOnclick({ Name: "Vegitable", Color: "#62D08E", emogi: "🥬" })
          }
        >
          <span role="img">🥬</span> Vegitable
        </button>
        <button
          type="button"
          className="spicesbutton"
          onClick={() =>
            buttonOnclick({ Name: "Spices", Color: "#ED722C", emogi: "🧂" })
          }
        >
          <span role="img">🧂</span> Spices
        </button>
        <button type="button" className="resetbutton" onClick={reset}>
          <span role="img">🚫</span> Reset
        </button>
      </div>

      {recipeToDisplay.length > 0 ? (
        <div className="containers">
          {recipeToDisplay
            .map(recipeObj => recipeObj)
            .reverse()
            .map((recipeObj, index) => {
              return (
                <div
                  key={index}
                  className="innerdivs"
                  style={{ backgroundColor: recipeObj.Color }}
                >
                  <span> {recipeObj.emogi}</span>
                  <span className="propertyDisplay">{recipeObj.Name}</span>
                </div>
              );
            })}
        </div>
      ) : null}
    </>
  );
}
export default RecipeMaker;

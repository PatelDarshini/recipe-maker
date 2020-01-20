import React, { useState } from "react";

function Counter(props) {
  const { displayValue, color = "tomato" } = props;
  const [number, setNumber] = useState(0);

  function IncrementClick() {
    console.log(number);

    setNumber(number + 1);
  }
  function DecrementClick() {
    setNumber(number - 1);
  }
  return (
    <div>
      <h2>
        {" "}
        <span style={{ color: color }}> {displayValue} </span>is {number}
      </h2>
      <button class="incrementbutton" onClick={() => IncrementClick()}>
        {" "}
        Increment{" "}
      </button>

      <button class="decrementbutton" onClick={() => DecrementClick()}>
        {" "}
        Decrement{" "}
      </button>
    </div>
  );
}

export default Counter;

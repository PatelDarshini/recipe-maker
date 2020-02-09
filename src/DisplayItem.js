import React from "react";
import "./table.css";
function DisplayItem(props) {
  const { item, shouldDisplayCategory = true } = props;

  console.log(props);
  return (
    <div
      className={
        item.category === "Lunch" ? "oddcolor displayiteam" : "evencolor"
      }
    >
      <div>{item.iteamName}</div>
      {shouldDisplayCategory === true ? <div>{item.category}</div> : null}
      <div>{item.description}</div>
    </div>
  );
}

export default DisplayItem;

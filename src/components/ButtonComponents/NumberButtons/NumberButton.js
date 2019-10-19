import React from "react";

const NumberButton = (props) => {
  console.log(props.number, "this is the number coming from props")
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number}
    </>
  );
};

export default NumberButton;
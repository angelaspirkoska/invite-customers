import React from "react";

const Button = ({ buttonText, className, onButtonClick }) => {
  function onClick() {
    //check if onButtonClick is valid props
    if (onButtonClick) onButtonClick();
  }
  return (
    <button className={className} data-testid="button" onClick={(e) => onClick()}>
      {buttonText}
    </button>
  );
};
export default Button;

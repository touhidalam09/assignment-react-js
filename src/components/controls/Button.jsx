import React from "react";

function Button(props) {
  const { type, text, onClick, ...other } = props;
  return (
    <button type={text || "button"} onClick={onClick} {...other}>
      {text}
    </button>
  );
}

export default Button;

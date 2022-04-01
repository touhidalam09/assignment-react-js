import React from "react";

function Input(props) {
  const {
    type,
    placeholder,
    name,
    value,
    error = null,
    handleInputChange,
    ...other
  } = props;
  return (
    <>
      <input
        className={error ? "form-control is-invalid" : "form-control"}
        type={type || "text"}
        placeholder={placeholder || "Username"}
        name={name || "username"}
        value={value}
        onChange={handleInputChange}
        {...other}
      />
      <div className={error ? "invalid-feedback" : "valid-feedback"}>
        {error ? error : " Looks good!"}
      </div>
    </>
  );
}

export default Input;

import React, { useState } from "react";

// UseForm Start
export function UseForm(initializeValue, validateOnChange = false, validate) {
  const [values, setValues] = useState(initializeValue);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    // For onchange Validate
    if (validateOnChange) validate({ [name]: value });
  };

  // Reset Form / Input field
  const resetForm = () => {
    setValues(initializeValue);
    setErrors({});
  };
  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}
// UseForm END

// Form Component Start
export function Form(props) {
  const { children, ...other } = props;
  return <form {...other}>{children}</form>;
}
// Form Component End

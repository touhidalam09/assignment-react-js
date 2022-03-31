import React from "react";
import Wrapper from "../../components/layouts/Wrapper";
import { UseForm, Form } from "../../components/controls/UseForm";
import Controls from "../../components/controls/controls";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { async } from "@firebase/util";

const initializeValue = {
  email: "",
  password: "",
};

function Login() {
  const { signIn } = useUserAuth();
  const navigate = useNavigate();

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("email" in fieldValues) {
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    }
    if ("password" in fieldValues) {
      temp.password =
        fieldValues.password.length !== "" && fieldValues.password.length >= 8
          ? ""
          : "Length must be eight character";
    }

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = UseForm(
    initializeValue,
    true,
    validate
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        await signIn(values.email, values.password);
        navigate("dashboard");
      } catch (error) {
        window.alert(error.message);
      }
    }
  };

  return (
    <>
      <Wrapper title="Login">
        <div className="container">
          <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
              <div className="col-lg-5 col-md-9 col-sm-11 m-auto">
                <div className="mt-3 p-5 card">
                  <h6>Sign in to your account </h6>
                  <Form onSubmit={handleSubmit} className="mt-4">
                    <div className="form-group mb-4">
                      <Controls.Input
                        required
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                      />
                    </div>
                    <div className="form-group mb-4">
                      <Controls.Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                      />
                    </div>
                    <Controls.Button
                      className="w-100 btn btn-success"
                      type="submit"
                      text="Login"
                    />
                  </Form>
                </div>

                <div className="card px-5 py-4 pb-2 mt-4 w-100">
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      <p>Don't have an account?</p>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <Link to="/registration">Registration now</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Login;

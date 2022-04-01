import React from "react";
import Wrapper from "../../components/layouts/Wrapper";
import { UseForm, Form } from "../../components/controls/UseForm";
import Controls from "../../components/controls/controls";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

const initializeValue = {
  username: "",
  email: "",
  password: "",
  mobile: "",
};

function Registration() {
  const navigate = useNavigate();
  const { signUp } = useUserAuth();

  const usersCollectionRef = collection(db, "users");

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("username" in fieldValues) {
      temp.username =
        fieldValues.username.length !== "" && fieldValues.username.length > 5
          ? ""
          : "Username length minimum six character";
    }
    if ("email" in fieldValues) {
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    }
    if ("password" in fieldValues) {
      temp.password =
        fieldValues.password.length !== "" && fieldValues.password.length > 7
          ? ""
          : "Length must be eight character";
    }
    if ("mobile" in fieldValues) {
      temp.mobile =
        fieldValues.mobile.length !== "" && fieldValues.mobile.length === 11
          ? ""
          : "Mobile number must be 11 Characters length!!";
    }
    setErrors({
      ...temp,
    });
    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange } = UseForm(
    initializeValue,
    true,
    validate
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const { username, email, mobile } = values;
      try {
        await signUp(values.email, values.password);
        await addDoc(usersCollectionRef, {
          username,
          email,
          mobile,
        });
        navigate("/dashboard");
      } catch (error) {
        window.alert(error.message);
      }
    }
  };
  return (
    <Wrapper title="Register an account">
      <div className="container">
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center mb-4">
          <div className="row w-100">
            <div className="col-lg-5 col-md-9 col-sm-11 m-auto">
              <div className="mt-3 p-5 card">
                <h6>Create your account </h6>
                <Form onSubmit={handleSubmit} className="mt-4">
                  <div className="form-group mb-4">
                    <Controls.Input
                      value={values.username}
                      onChange={handleInputChange}
                      error={errors.username}
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <Controls.Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={values.email}
                      onChange={handleInputChange}
                      error={errors.email}
                      required
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
                      required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <Controls.Input
                      type="number"
                      placeholder="Mobile number"
                      name="mobile"
                      value={values.mobile}
                      onChange={handleInputChange}
                      error={errors.mobile}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <input type="checkbox" name="policy" id="policy" required />
                    <label
                      className="ps-2"
                      style={{ fontSize: "14px" }}
                      htmlFor="policy"
                    >
                      I accept the Terms of Service and Privacy Policy{" "}
                    </label>
                  </div>
                  <Controls.Button
                    type="submit"
                    text="Registration"
                    className="w-100 btn btn-success"
                  />
                </Form>
              </div>

              <div className="card px-5 py-4 pb-2 mt-4 w-100">
                <div className="row">
                  <div className="col-xm-12 col-md-8">
                    <p>Already have an account?</p>
                  </div>
                  <div className="col-xm-12 col-md-4">
                    <Link to="/">sign in</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Registration;

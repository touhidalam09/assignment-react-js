import React from "react";
import { Link } from "react-router-dom";
import Controls from "../components/controls/controls";
import Wrapper from "../components/layouts/Wrapper";

function NotFoundPage() {
  return (
    <Wrapper title="404 not found">
      <div className="container">
        <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
          <h1>404 NOT FOUND !!!...</h1>
          <Link to="/">
            <Controls.Button
              text="Back To Right Path"
              className="btn btn-info btn-lg custom-btn"
            />
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default NotFoundPage;

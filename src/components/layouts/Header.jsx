import React from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../controls/controls";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div className="header d-flex align-items-center justify-content-end">
      <Controls.Button
        className="btn btn-info"
        text="Logout"
        onClick={() => navigate("/")}
      />
    </div>
  );
}

export default Header;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Controls from "../controls/controls";

function Sidebar(props) {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="brand text-center pt-4 text-muted">
        <h4>Assignment</h4>
      </div>
      <ul className="nav flex-column text-center">
        <li className="nav-item">
          <Controls.Button
            text="user"
            className="w-100 btn custom-btn"
            onClick={() => navigate("user")}
          />
        </li>
        <li className="nav-item">
          <Controls.Button
            text="Product"
            className="w-100 btn custom-btn"
            onClick={() => navigate("product")}
          />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

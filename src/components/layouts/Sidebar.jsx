import React from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../controls/controls";

function Sidebar() {
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

      <div className="language-picker js-language-picker text-center py-2 language">
        <label htmlFor="language-picker-select">language</label>
        <select name="language-picker-select" id="language-picker-select">
          <option lang="BN" value="bengali">
            Bengali
          </option>
          <option lang="en" value="english">
            English
          </option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;

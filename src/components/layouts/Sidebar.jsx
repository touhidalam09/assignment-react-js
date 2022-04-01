import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../controls/controls";
import { LangContext } from "../../context/WrapperLang";
import { FormattedMessage } from "react-intl";

function Sidebar() {
  const contextLang = useContext(LangContext);
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="brand text-center pt-4 text-muted">
        <h4>
          <FormattedMessage
            id="sidebar.assignment"
            defaultMessage="Assignment"
          />
        </h4>
      </div>
      <ul className="nav flex-column text-center">
        <li className="nav-item">
          <Controls.Button
            text={<FormattedMessage id="sidebar.user" defaultMessage="User" />}
            className="w-100 btn custom-btn"
            onClick={() => navigate("user")}
          />
        </li>
        <li className="nav-item">
          <Controls.Button
            text={
              <FormattedMessage id="sidebar.product" defaultMessage="Product" />
            }
            className="w-100 btn custom-btn"
            onClick={() => navigate("product")}
          />
        </li>
      </ul>

      <div className="language-picker js-language-picker text-center py-2 language">
        <label htmlFor="language-picker-select">
          <FormattedMessage id="sidebar.language" defaultMessage="Language" />
        </label>
        <select
          value={contextLang.locale}
          onChange={contextLang.selectLang}
          name="language-picker-select"
          id="language-picker-select"
        >
          <option lang="en" value="en-US">
            English
          </option>
          <option lang="BN" value="bn">
            Bengali
          </option>
        </select>
      </div>
    </div>
  );
}

export default Sidebar;

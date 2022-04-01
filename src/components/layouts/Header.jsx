import React from "react";
import Controls from "../controls/controls";
import { useUserAuth } from "../../context/UserAuthContext";
import { FormattedMessage } from "react-intl";

function Header() {
  const { user, logOut } = useUserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      window.alert(error.message);
    }
  };
  return (
    <div className="header d-flex align-items-center justify-content-end">
      <h6>
        <FormattedMessage id="header.welcome" defaultMessage="Welcome" />
        {user && user.email}
      </h6>{" "}
      &nbsp;
      <Controls.Button
        className="btn btn-info"
        text={<FormattedMessage id="header.logout" defaultMessage="Logout" />}
        onClick={handleSignOut}
      />
    </div>
  );
}

export default Header;

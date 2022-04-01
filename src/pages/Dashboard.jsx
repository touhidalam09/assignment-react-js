import React from "react";
import Wrapper from "../components/layouts/Wrapper";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import { Outlet } from "react-router-dom";

function Dashboard(props) {
  return (
    <>
      <Wrapper title="Dashboard">
        <div className="container-fluid">
          {/* sidebar */}
          <Sidebar />
          {/* header  */}
          <Header />
          {/* Page Content  */}
          <div className="main-content spacer-bottom">
            <Outlet />
            {/* {children} */}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Dashboard;

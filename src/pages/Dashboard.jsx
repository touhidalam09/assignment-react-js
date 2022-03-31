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
            {/* <h1 className="text-center text-muted">Welcome To Dashboard</h1> */}
            {/* 
              The parent route (<Parent>) is responsible for making sure
              the matching child route is rendered with <Outlet>. 
          */}
            <Outlet />
            {/* {children} */}
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default Dashboard;

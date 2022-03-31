import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Controls from "../../components/controls/controls";
import UseTable from "../../components/controls/UseTable";

const headerCells = [
  { id: "#", label: "#" },
  { id: "productID", label: "ProductID" },
  { id: "name", label: "Name" },
  { id: "price", label: "Price" },
  { id: "wholesale", label: "Wholesale Price" },
  { id: "listPrice", label: "List Price" },
  { id: "qty", label: "Qty On hand" },
  { id: "action", label: "Action" },
];

function Product(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const setLocationTrue = location.pathname === "/dashboard/product";

  const { TblContainer, TblHead } = UseTable("Products", headerCells);

  const handleBtnView = () => {
    if (setLocationTrue) {
      navigate("add");
    } else {
      navigate(-1);
    }
  };

  const handleUpdate = () => {};
  const handleDelete = () => {
    if (window.confirm("ARE U SURE?")) {
    }
  };

  return (
    <>
      <div className="py-2 d-flex justify-content-end">
        <Controls.Button
          text={setLocationTrue ? "Add New" : "Cancel"}
          type="button"
          className="btn btn-info btn-sm custom-btn"
          onClick={handleBtnView}
        />
      </div>
      <Outlet />
      {/* Children  */}
      {setLocationTrue && (
        <TblContainer>
          <TblHead />
          <tbody>
            <tr>
              <td>1</td>
              <td>productID</td>
              <td>name</td>
              <td>price</td>
              <td>wholesale</td>
              <td>listPrice</td>
              <td>quantity</td>
              <td>
                <Link to={`edit/1`}>
                  <Controls.Button
                    className="btn btn-info btn-sm"
                    text="Edit"
                    onClick={() => handleUpdate()}
                  />
                </Link>
                {/* <i className="fa-light fa-pencil"></i> */}
                &nbsp;
                <Controls.Button
                  className="btn btn-danger btn-sm"
                  text="Delete"
                  onClick={() => handleDelete()}
                />
                {/* <i className="fa-thin fa-trash"></i> */}
              </td>
            </tr>
          </tbody>
        </TblContainer>
      )}
    </>
  );
}

export default Product;

import React from "react";
import UseTable from "../../components/controls/UseTable";

const headerCells = [
  { id: "#", label: "#" },
  { id: "username", label: "Username" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
];
function UserPage(props) {
  const { TblContainer, TblHead } = UseTable("users", headerCells);
  return (
    <>
      <TblContainer>
        <TblHead />
        <tbody>
          <tr>
            <td>1</td>
            <td>Name simple</td>
            <td>a@gmail.com</td>
            <td>01298349983</td>
          </tr>
        </tbody>
      </TblContainer>
    </>
  );
}

export default UserPage;

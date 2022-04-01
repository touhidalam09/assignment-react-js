import React, { useEffect, useState } from "react";
import UseTable from "../../components/controls/UseTable";
import { db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const headerCells = [
  { id: "#", label: "#" },
  { id: "username", label: "Username" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
];

function UserPage() {
  const { TblContainer, TblHead } = UseTable("users", headerCells);

  const [userRecords, setUserRecords] = useState([]);
  const usersCollectionRef = collection(db, "users");
  // get all products
  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    setUserRecords(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <TblContainer>
        <TblHead />
        <tbody>
          {userRecords.map((user, index) => (
            <tr key={index}>
              <td>{(index = index + 1)}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
            </tr>
          ))}
        </tbody>
      </TblContainer>
    </>
  );
}

export default UserPage;

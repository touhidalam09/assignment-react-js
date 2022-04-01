import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Controls from "../../components/controls/controls";
import UseTable from "../../components/controls/UseTable";
import { db } from "../../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { FormattedMessage } from "react-intl";

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

  const [products, setProducts] = useState([]);
  const [recordsForEdit, setRecordsForEdit] = useState(null);

  const productsCollectionRef = collection(db, "products");

  // dynamic change button name
  const handleBtnView = () => {
    if (setLocationTrue) {
      navigate("add");
    } else {
      navigate(-1);
      setRecordsForEdit(null);
    }
  };
  // get all products
  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  // Add product and Edit product
  const createOrEditProduct = async (values, resetForm) => {
    const {
      id,
      productID,
      name,
      price,
      wholesale,
      listPrice,
      quantity,
    } = values;
    try {
      if (id === null) {
        await addDoc(productsCollectionRef, {
          productID,
          name,
          price,
          wholesale,
          listPrice,
          quantity,
        });
      } else {
        const userDoc = doc(db, "products", id);
        await updateDoc(userDoc, {
          productID,
          name,
          price,
          wholesale,
          listPrice,
          quantity,
        });
        setRecordsForEdit(null);
      }
      resetForm();
      getProducts();
    } catch (err) {
      window.alert(err.message);
    }
    navigate(-1);
  };
  // trigger update product
  const handleUpdate = (product) => {
    setRecordsForEdit(product);
  };
  // delete product
  const handleDelete = async (id) => {
    const userDoc = doc(db, "products", id);
    if (window.confirm("ARE U SURE?")) {
      await deleteDoc(userDoc);
      getProducts();
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="py-2 d-flex justify-content-end">
        <Controls.Button
          text={
            setLocationTrue ? (
              <FormattedMessage id="product.addNew" defaultMessage="add new" />
            ) : (
              <FormattedMessage id="product.cancel" defaultMessage="cancel" />
            )
          }
          type="button"
          className="btn btn-secondary btn-sm opacity"
          onClick={handleBtnView}
        />
      </div>
      <Outlet context={[createOrEditProduct, recordsForEdit]} />
      {/* Children  */}
      {setLocationTrue && (
        <TblContainer>
          <TblHead />
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{(index = index + 1)}</td>
                <td>{product.productID}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.wholesale}</td>
                <td>{product.listPrice}</td>
                <td>{product.quantity}</td>
                <td>
                  <Link to={`edit/1`}>
                    <Controls.Button
                      className="btn btn-warning btn-sm opacity"
                      text="Edit"
                      onClick={() => handleUpdate(product)}
                    />
                  </Link>
                  &nbsp;
                  <Controls.Button
                    className="btn btn-danger btn-sm opacity"
                    text="Delete"
                    onClick={() => handleDelete(product.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </TblContainer>
      )}
    </>
  );
}

export default Product;

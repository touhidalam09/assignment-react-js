import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Controls from "../../components/controls/controls";
import { UseForm, Form } from "../../components/controls/UseForm";
import { FormattedMessage } from "react-intl";

const initializeValue = {
  id: null,
  productID: "",
  name: "",
  price: "",
  wholesale: "",
  listPrice: "",
  quantity: "",
};

function ProductForm(props) {
  const [createOrEditProduct, recordsForEdit] = useOutletContext();

  const { values, setValues, handleInputChange, resetForm } =
    UseForm(initializeValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrEditProduct(values, resetForm);
  };

  useEffect(() => {
    if (recordsForEdit !== null) {
      setValues({
        ...recordsForEdit,
      });
    }
  }, [recordsForEdit]);

  return (
    <>
      <div className="p-5 card">
        <h5 className="text-muted">
          {recordsForEdit !== null ? (
            <FormattedMessage
              id="product.updateProduct"
              defaultMessage="Update Product"
            />
          ) : (
            <FormattedMessage
              id="product.addNewProduct"
              defaultMessage="Add new product"
            />
          )}
        </h5>
        <Form onSubmit={handleSubmit} className="mt-4">
          <div className="form-group mb-4">
            <Controls.Input
              required
              type="number"
              placeholder="Product ID"
              name="productID"
              value={values.productID}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <Controls.Input
              required
              placeholder="Product Name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <Controls.Input
              required
              type="number"
              placeholder="Product price"
              name="price"
              value={values.price}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <Controls.Input
              required
              type="number"
              placeholder="Wholesale Price"
              name="wholesale"
              value={values.wholesale}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <Controls.Input
              required
              type="number"
              placeholder="List Price"
              name="listPrice"
              value={values.listPrice}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group mb-4">
            <Controls.Input
              required
              type="number"
              placeholder="Quantity"
              name="quantity"
              value={values.quantity}
              onChange={handleInputChange}
            />
          </div>
          <Controls.Button
            text={recordsForEdit !== null ? "Update" : "Add"}
            type="submit"
            className="w-100 btn btn-danger custom-btn"
          />
        </Form>
      </div>
    </>
  );
}

export default ProductForm;

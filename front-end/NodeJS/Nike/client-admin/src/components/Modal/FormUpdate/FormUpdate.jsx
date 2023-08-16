import React, { useEffect, useState } from "react";
import "./FormUpdate.css";
import "firebase/storage";
import { useDispatch } from "react-redux";
import { updateState } from "../../../store/UpdateProSlice";
import axios from "axios";
import Success from "../Success/Success";

const FormUpdate = ({ handleEdit, idUpdate, dataEdit, handleLoading }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [news, setNews] = useState("");
  const [quantityInventory, setQuantityInventory] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");

  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [errors, setErrors] = useState({});
  const [isShowSuccess, setIsShowSuccess] = useState(false);
  useEffect(() => {
    if (dataEdit[0]) {
      setName(dataEdit[0].name);
      setType(dataEdit[0].type);
      setPrice(dataEdit[0].price);
      setNews(dataEdit[0].new);
      setQuantityInventory(dataEdit[0].quantity_inventory);
    }
  }, [dataEdit[0]]);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const errors = {};

    if (name.trim() === "") {
      isValid = false;
      errors.name = "Please enter product name";
    }
    if (type.trim() === "") {
      isValid = false;
      errors.type = "Please enter product type";
    }
    if (image === "") {
      isValid = false;
      errors.image = "Please enter product image";
    }
    if (price === "") {
      isValid = false;
      errors.price = "Please enter product price";
    }
    if (news === "") {
      isValid = false;
      errors.news = "Please enter product news";
    }
    if (quantityInventory === "") {
      isValid = false;
      errors.quantityInventory = "Please enter product quantity_inventory";
    }
    if (image1 === "") {
      isValid = false;
      errors.image1 = "Please enter product image_1";
    }
    if (image2 === "") {
      isValid = false;
      errors.image2 = "Please enter product image_2";
    }
    if (image3 === "") {
      isValid = false;
      errors.image3 = "Please enter product image_3";
    }
    if (image4 === "") {
      isValid = false;
      errors.image4 = "Please enter product image_4";
    }
    setErrors(errors);

    if (isValid) {
      const formProduct = new FormData();
      formProduct.append("name", name);
      formProduct.append("type", type);
      formProduct.append("price", price);
      formProduct.append("new", news);
      formProduct.append("quantity_inventory", quantityInventory);
      formProduct.append("image", image);
      try {
        const response = await axios.patch(
          `http://localhost:8080/api/v1/products/admin-update/${idUpdate}`,
          formProduct,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }

      const formImage = new FormData();
      formImage.append("images", image1);
      formImage.append("images", image2);
      formImage.append("images", image3);
      formImage.append("images", image4);
      formImage.append("product_id", Number(idUpdate));

      try {
        const response = await axios.patch(
          `http://localhost:8080/api/v1/images/admin-update/${idUpdate}`,
          formImage,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsShowSuccess(true);
      dispatch(updateState());
      handleLoading();
    }
  };

  const closeSuccess = () => {
    setIsShowSuccess(false);
    handleEdit();
  };
  return (
    <div className="modal">
      {isShowSuccess && <Success closeSuccess={closeSuccess} />}
      <div className="modal-null">
        <form className="form-create" onSubmit={handleFormSubmit}>
          <div className="form-create-form">
            <div className="form-update-left">
              <h3>Product Information</h3>
              <div className="wrapper-input-edit">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name Product"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {errors.name && <p className="error1">{errors.name}</p>}
              </div>
              <div className="wrapper-input-edit">
                {" "}
                <select
                  onChange={(e) => setType(e.target.value)}
                  className="form-control"
                  value={type}
                >
                  <option value="">---</option>
                  <option value="Men's Shoes">Men's Shoes</option>
                  <option value="Woman's Shoes">Woman's Shoes</option>
                  <option value="Kid's Shoes">Kid's Shoes</option>
                </select>
                {errors.type && <p className="error1">{errors.type}</p>}
              </div>
              <div className="wrapper-input-edit">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image"
                  onChange={(e) => setImage(e.target.files[0])}
                />

                {errors.image && <p className="error1">{errors.image}</p>}
              </div>
              <div className="wrapper-input-edit">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {errors.price && <p className="error1">{errors.price}</p>}
              </div>
              <div className="wrapper-input-edit">
                <select
                  onChange={(e) => setNews(e.target.value)}
                  className="form-control"
                  value={news}
                >
                  <option value="1">New Arrival</option>
                  <option value="2">None</option>
                </select>
                {errors.news && <p className="error1">{errors.news}</p>}
              </div>
              <div className="wrapper-input-edit">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Quantity_inventory"
                  value={quantityInventory}
                  onChange={(e) => setQuantityInventory(e.target.value)}
                />
                {errors.quantityInventory && (
                  <p className="error1">{errors.quantityInventory}</p>
                )}
              </div>
            </div>
            <div className="form-update-right">
              <h3>Image Information</h3>
              <div className="wrapper-input-edit">
                <input
                  type="file"
                  className="form-control"
                  placeholder="Image_1"
                  onChange={(e) => setImage1(e.target.files[0])}
                />
                {errors.image1 && <p className="error1">{errors.image1}</p>}
              </div>
              <div className="wrapper-input-edit">
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  placeholder="Image_2"
                  onChange={(e) => setImage2(e.target.files[0])}
                />
                {errors.image2 && <p className="error1">{errors.image2}</p>}
              </div>
              <div className="wrapper-input-edit">
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  placeholder="Image_3"
                  onChange={(e) => setImage3(e.target.files[0])}
                />
                {errors.image3 && <p className="error1">{errors.image3}</p>}
              </div>
              <div className="wrapper-input-edit">
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  placeholder="Image_4"
                  onChange={(e) => setImage4(e.target.files[0])}
                />
                {errors.image4 && <p className="error1">{errors.image4}</p>}
              </div>
            </div>
          </div>
          <div className="modal-null-button">
            <button type="submit">Update</button>{" "}
            <button onClick={() => handleEdit()}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormUpdate;

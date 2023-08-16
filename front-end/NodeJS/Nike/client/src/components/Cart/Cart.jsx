import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Products } from "../../api/Product";
import { OrderDetail } from "../../api/OrderDetail";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateState } from "../../store/UpdateProSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  let quantityTotal = 0;
  let priceTotal = 0;
  const [dataCart, setDataCart] = useState([]);
  const dispatch = useDispatch();
  const update = useSelector((state) => state.update);
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (user && user.id) {
      Products.getProductMerger(user.id).then((product) => {
        setDataCart(product[0]?.OrderDetails);
      });
    }
  }, [update, location.pathname]);

  const handleDelete = async (id) => {
    await OrderDetail.deleteOrderDetail(id);
    dispatch(updateState());
  };

  const handleClickSize = async (e, id) => {
    const quantityValue = {
      quantity: e.target.value,
    };
    await OrderDetail.updateOrderDetail(id, quantityValue);
    dispatch(updateState());
  };

  const handleToPayment = () => {
    OrderDetail.getOrderDetailById(user.id).then((data) => {
      if (data.length === 0) {
        toast.error("Please order products !", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        navigate("/payment");
      }
    });
  };
  return (
    <div className="shopping-cart">
      <ToastContainer />
      <div className="">
        <div className="content">
          <div className="row">
            <div className="col-md-12 col-lg-8">
              <div className="items">
                <div className="row gap-3">
                  {dataCart &&
                    dataCart.map((data) => {
                      quantityTotal += data.quantity;

                      priceTotal += data.Product.price * data.quantity;

                      return (
                        <div className="d-flex align-items-center justify-content-between">
                          <i
                            className="fa-solid fa-trash fs-5 cursor-pointer"
                            onClick={() => handleDelete(data.product_id)}
                          />
                          <div className="col-md-2">
                            <img
                              className="img-fluid mx-auto d-block image"
                              src={data?.Product?.image}
                              style={{ width: "100px" }}
                            />
                          </div>
                          <div className="col-md-8 d-flex ">
                            <div className="row align-items-center justify-content-between w-100">
                              <div className="col-md-5 product-name">
                                <div className="product-name ">
                                  <Link to={`/detail/${data.product_id}`}>
                                    {data.Product.name}
                                  </Link>
                                  <div className="product-info">
                                    <div>
                                      <span className="value">
                                        {data.Product.type}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <div>
                                      <span className="value">
                                        {data.size_product}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-3 quantity">
                                <select
                                  className="form-select"
                                  aria-label="Default select example"
                                  value={data.quantity}
                                  onChange={(e) =>
                                    handleClickSize(e, data.product_id)
                                  }
                                >
                                  {" "}
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                </select>
                              </div>

                              <div className="col-md-4 price fw-bold">
                                <span className="">
                                  {(
                                    data.Product.price * data.quantity
                                  ).toLocaleString()}{" "}
                                  $
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary total-Cart">
                <div className="content-total">
                  <h3>Summary</h3>
                  <div className="d-flex justify-content-between">
                    <span className="text">Quantity: </span>
                    <span className="price">
                      <b>{quantityTotal}</b>
                    </span>
                  </div>
                  <div className="d-flex justify-content-between border-top mt-3 pt-3">
                    <span className="text">Total price: </span>
                    <span className="price">
                      <b> {priceTotal.toLocaleString("de-De")} $</b>
                    </span>
                  </div>

                  <button
                    type="button"
                    className="btn-checkout"
                    onClick={handleToPayment}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

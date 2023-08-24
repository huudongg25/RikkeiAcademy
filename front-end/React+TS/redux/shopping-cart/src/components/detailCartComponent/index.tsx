import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { Dispatch, useMemo } from "react";

function DetailCartComponent() {
  const dataCart = useSelector((state: any) => state);
  let totalPay: number = useMemo(() => {
    let value = dataCart.reduce((total: any, item: any) => {
      return item.price * item.quantity + total;
    }, 0);
    return value;
  }, [dataCart]);

  const disptach: Dispatch<any> = useDispatch();
  return (
    <div className="wrapper-detail">
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Sản phẩm</th>
            <th>Giá tiền</th>
            <th>Số lượng mua</th>
            <th>Đơn giá</th>
            <th></th>
          </tr>
        </thead>
        {dataCart.length > 0 ? (
          <tbody>
            {dataCart.map((item: any, index: number) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }}
                    >
                      <span className="name-product-table">{item.name}</span>
                      <img
                        className="img-product-table"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </td>
                  <td>{item.price.toLocaleString()} đ</td>
                  <td>
                    <span
                      onClick={() =>
                        disptach({ type: "DOWN_QTY", payload: item.id })
                      }
                    >
                      -
                    </span>
                    <input type="text" value={item.quantity} readOnly />
                    <span
                      onClick={() =>
                        disptach({ type: "UP_QTY", payload: item.id })
                      }
                    >
                      +
                    </span>
                  </td>
                  <td>{(item.price * item.quantity).toLocaleString()} đ</td>
                  <td>
                    <button
                      className="btn-delete"
                      onClick={() =>
                        disptach({ type: "REMOVE_CART", payload: item.id })
                      }
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td style={{ textAlign: "center" }} colSpan={6}>
                Bảng này chưa có thông tin
              </td>
            </tr>
          </tbody>
        )}
      </table>
      {dataCart.length > 0 && (
        <div className="payment">
          <span className="title">Tổng tiền :</span>{" "}
          <span className="total-payment">{totalPay.toLocaleString()} đ</span>
          <button
            className="btn-payment"
            onClick={() => disptach({ type: "PAYMENT" })}
          >
            Thanh toán
          </button>
        </div>
      )}
    </div>
  );
}

export default DetailCartComponent;

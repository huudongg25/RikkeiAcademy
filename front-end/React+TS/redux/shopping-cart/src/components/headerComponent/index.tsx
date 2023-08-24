import { Link } from "react-router-dom";
import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function HeaderComponent() {
  const dataCart = useSelector((state: any) => state);
  return (
    <header className="wrapper-header">
      <Link to="/">
        <span className="sponsor">RikkeiShop</span>
      </Link>
      <Link to="cart-details">
        <div className="cart-group">
          <AiOutlineShoppingCart className="cart-icon" />
          {dataCart.length > 0 && (
            <span className="cart-quantity">{dataCart.length}</span>
          )}
        </div>
      </Link>
    </header>
  );
}

export default HeaderComponent;

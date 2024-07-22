import "./CartPage.css";
import Table from "../Table/Table";
import QuantityInput from "../SingleProduct/QuantityInput";
import remove from "../../assets/remove.png";
import { useContext, useMemo } from "react";
import UserContext from "../../contexts/UserContext";
import CartContext from "../../contexts/CartContext";
import { checkOutAPI } from "./../../Services/orderServices";
import { toast } from "react-toastify";
import config from "../../config.json";

const CartPage = () => {
  const user = useContext(UserContext);
  const { cart, removeFromCart, updatedCart, setCart } =
    useContext(CartContext);

  const subTotal = useMemo(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  }, [cart]);

  const checkout = () => {
    const oldCart = [...cart];
    setCart([]);
    checkOutAPI()
      .then(() => {
        toast.success("Order Placed Successfully");
      })
      .catch((err) => {
        toast.error("Order Not Placed. Something went wrong!");
        setCart(oldCart);
      });
  };
  return (
    <section className="align_center cart_page">
      <div className="align_center user_info">
        <img
          src={`${config.backendURL}/profile/${user?.profilePic}`}
          alt="user profile"
        />
        <div>
          <p className="user_name">Name : {user?.name}</p>
          <p className="user_email">Email : {user?.email}</p>
        </div>
      </div>

      <Table headings={["Item", "Price", "Quantity", "total", "Remove"]}>
        <tbody>
          {cart.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td className="align_center table_quantity_input">
                <QuantityInput
                  quantity={quantity}
                  stock={product.stock}
                  setQuantity={updatedCart}
                  cartPage={true}
                  productId={product._id}
                />
              </td>
              <td>{quantity * product.price}</td>
              <td>
                <img
                  src={remove}
                  alt="removeIcon"
                  className="cart_remove_icon"
                  onClick={() => removeFromCart(product._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <table className="cart_bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>{subTotal}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className="cart_bill_final">
            <td>Total</td>
            <td>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>
      <button className="search_button checkout_button" onClick={checkout}>
        Checkout
      </button>
    </section>
  );
};

export default CartPage;

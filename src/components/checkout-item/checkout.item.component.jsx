import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";


const CheckoutItem = ({ cartItem }) => {

  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const ClearItemHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (<div className="checkout-item-container">
    <div className="image-container">
      <img alt={name} src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={removeItemHandler}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={addItemHandler}>
        &#10095;
      </div>

    </span>
    <span className="price">{`${quantity} * ${price} = $${price * quantity}`}</span>

    <div className="remove-button" onClick={ClearItemHandler}>&#10005;</div>

  </div>)
}


export default CheckoutItem;
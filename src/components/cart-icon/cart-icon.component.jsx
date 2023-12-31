import { useContext } from "react";
import { ReactComponent as ShopingIcon } from "../../assets/shopping-cart.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";



const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, count } = useContext(CartContext);

  const handleToggle = () => setIsCartOpen(!isCartOpen);

  return (<div className="cart-icon-container" onClick={handleToggle}>
    <ShopingIcon className="shopping-icon" />
    <span className="item-count">{count}</span>
  </div>)

}


export default CartIcon;
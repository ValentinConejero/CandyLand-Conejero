import Cart from "../../Assets/img/CartIcon.png"
import "./CartStyle.css"

const CartWidget = ({count}) => {
return <>
<div className="imgContainer">
<img  className="cart tam " href="CartIcon" src={Cart} alt="ImagenCarrito"></img>
<label className="num">{count}</label>
</div>
</>
}
export default CartWidget
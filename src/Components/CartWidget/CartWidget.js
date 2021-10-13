import Cart from "../../Assets/img/CartIcon.png"
import "./CartStyle.css"

const CartWidget = () => {
return <>
<div className="imgContainer">
<img  className="cart tam " href="CartIcon" src={Cart} alt="ImagenCarrito"></img>
<label className="num">5</label>
</div>
</>
}
export default CartWidget
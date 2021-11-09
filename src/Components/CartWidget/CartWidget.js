import Cart from "../../Assets/img/CartIcon.png"
import "./CartStyle.css"
import {Link} from "react-router-dom"

const CartWidget = ({count}) => {
return <>
<div className="imgContainer">
<Link to='/Cart'>
<img  className="cart tam " href="CartIcon" src={Cart} alt="ImagenCarrito"></img>
</Link>
<label className="num">{count}</label>
</div>
</>
}
export default CartWidget
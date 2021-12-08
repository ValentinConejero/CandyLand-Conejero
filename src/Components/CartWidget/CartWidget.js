import Cart from "../../Assets/img/CartIcon.png"
import "./CartStyle.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"

const CartWidget = () => {

    const { getTotalCount } = useContext(CartContext)



    return <>
        <div className="imgContainer">
            <Link to='/Cart'>
                <img className="cart tam " href="CartIcon" src={Cart} alt="ImagenCarrito"></img>
            </Link>
            {(getTotalCount() > 0) &&
                <label className="num">{getTotalCount()}</label>}
        </div>
    </>
}
export default CartWidget
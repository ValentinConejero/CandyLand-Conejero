import "./Cart.css"
import CartList from "../CartList/CartList"

const Cart = () => {



    return (
        <div>
            <h1 >
                <b className="cent">CARRITO</b>
            </h1>
            <main>
                <CartList />
            </main>
        </div>
    )
}

export default Cart
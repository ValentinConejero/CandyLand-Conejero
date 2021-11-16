import CartItem from '../CartItem/CartItem';
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./CartList.css"

const CartList = () => {

    const { cart, getTotal } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal, cart])

    console.log(total)
    console.log(cart)
    return (
        <>
            {(cart.length === 0) ?
                <div className="tcen">
                    <div className="col-sm-12">
                        <p><b>EL CARRITO ESTA VACIO</b></p>
                    </div>
                    <div className="col-sm-12">
                        <NavLink type="button-sm" to={`/`} className="btn btn-outline-danger">MENU </NavLink>
                    </div>
                </div>
                :
                <div>
                    <div className="row bord">

                        <div className="col-sm-2 data">
                            <p><b>PRODUCTO</b></p>
                        </div>
                        <div className="col-sm-2 data">
                            <p><b>TIPO</b></p>
                        </div>

                        <div className="col-sm-2 data">
                            <p><b>CANTIDAD</b></p>
                        </div>
                        <div className="col-sm-2 data">
                            <p className=""><b>Precio</b></p>
                        </div>
                        <div className="col-sm-2 data">
                            <p className=""><b>Total</b></p>
                        </div>
                        <div className="col-sm-2 data">
                        </div>

                    </div>

                    {cart.map(prod => (
                        <CartItem key={prod.id} prod={prod} />
                    )
                    )}

                    <div className="row totp">
                        <div className="col-sm-12 totalbut">
                            <p><b className="marglet">TOTAL A PAGAR:</b>${total}</p>
                        </div>
                        <div className="col-sm-12 totalbut">
                            <NavLink type="button-sm" to="/cart" className="btn btn-outline-success margbut">COMPRAR </NavLink>
                        </div>
                    </div>
                </div>
            }
        </>

    )
}


export default CartList;
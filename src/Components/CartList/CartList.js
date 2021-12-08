import CartItem from '../CartItem/CartItem';
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./CartList.css"
import { newOrder } from "../../FireBase/index";

const CartList = () => {

    const { cart, getTotal, setCart, setId, buyer, setBuyer } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(getTotal())
    }, [getTotal, cart])

    const sendOrder = () => {
        
        const order = {
            buyer: buyer,
            items: cart,
            total: total
        };
        newOrder(order, setId)
        setTotal(0)
        setBuyer()
        setCart([])
    }

    return (
        <>
            {(cart.length === 0) ?
                <div className="tcen">
                    <div className="col-sm-12">
                        <p><b>EL CARRITO ESTA VACIO</b></p>
                    </div>
                    <div className="col-sm-12 ">
                        <NavLink type="button-sm" to={`/`} className="btn btn-outline-danger">MENU </NavLink>
                    </div>
                </div>
                :
                <div>
                    <div className="row bord margincancel">

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

                    <div className="row totp margincancel">
                        <div className="col-sm-12 totalbut">
                            <p><b className="marglet">TOTAL A PAGAR:</b> ${total}</p>
                        </div>
                        <div className="col-sm-12 totalbut row">
                            {buyer === undefined ?
                                <div className="totalbut">
                                    <NavLink type="button-sm" to="/formbuy" className="btn btn-outline-primary margbut">Formulario </NavLink>
                                </div>
                                :
                                <>
                                    <div>
                                        <p className="pMargin"><b>Envio </b></p>
                                        <p className="marginp"><b>Email:</b> {buyer.email}</p>
                                        <p className="marginp"><b>Direccion:</b> {buyer.direccion}</p>
                                    </div>
                                    <div className="buysButtons">
                                        <NavLink type="button-sm" to="/formbuy" className="btn btn-outline-primary marginb" onClick={() => setBuyer()}>Editar</NavLink>
                                        <NavLink type="button-sm" to="/buy" className="btn btn-outline-success marginbuy" onClick={() => sendOrder()}>COMPRAR </NavLink>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            }
        </>

    )
}


export default CartList;
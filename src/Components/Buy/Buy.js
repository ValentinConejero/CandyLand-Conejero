import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"
import { NavLink } from "react-router-dom";

const Buy = () => {

    const { id } = useContext(CartContext);

    return (
        <div className="txtcen">
            <h1><b>COMPRA FINALIZADA</b></h1>
            <h5>El id de su orden es: <b>{id}</b></h5>
            <p>Nos comunicaremos a la brevedad, verifique su correo</p>
            <NavLink type="button-sm" to={`/`} className="btn btn-outline-danger">HOME</NavLink>
        </div>
    )
}

export default Buy
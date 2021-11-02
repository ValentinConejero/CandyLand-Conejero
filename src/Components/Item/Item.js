import "./Item.css"
import { NavLink } from "react-router-dom"

const Item = ({product}) => {
    
    

    return <div className="row col">
        <div className="card box back col-sm-4">
            <img className="card-img-top tami" src={product?.img} alt="imgCard"></img>
            <div className ="card-body">
            <h5 className ="card-title let"><b>{product?.name}</b></h5>
            <p className ="card-text"><b className="let">Sabores: </b>{product?.sabores}.</p>
            <p className ="card-text"><b className="let">Unidades x Caja: </b>{product?.unidades}u.</p>
            <p className ="card-text"><b className="let">Precio: </b>${product?.precio}.</p>
            <NavLink to={`/item/${product?.id}`} className ="btn btn-primary">Ver Más </NavLink>
            </div>
        </div>
    </div>


}

export default Item

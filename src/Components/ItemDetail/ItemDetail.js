import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
import Tick from "../../Assets/img/Tick.png"
import { CartContext } from "../../Context/CartContext/CartContext";

const ItemDetail = ({candy, count, setCount }) => {

    const [agg, setAgg] = useState(false);
    const [counter, setCounter] = useState(0);
    const { addProd } = useContext(CartContext)

    const onAdd = () => {
        setCount(count + counter)
        setAgg(true)
        addProd(candy, counter)
        
    }


    useEffect(() => {

    }, [agg]);

    return <>

        <div className="row col-sm-12 mt ac">
            <div className="col-sm-6 ds imge">
                <img className="card-img-top tami bordi " src={candy?.img} alt="imgCard"></img>
            </div>
            <div className="col-sm-6 mt">
                <h5 className="card-title let colorname"><b>{candy?.name}</b></h5>
                <p className="card-text"><b className="let">Sabores: </b>{candy?.sabores}.</p>
                <p className="card-text"><b className="let">Unidades x Caja: </b>{candy?.unidades}u.</p>
                <p className="card-text"><b className="let">Precio: </b>${candy?.precio}.</p>
                <p className="card-text"><b>Descripción: </b>{candy?.desc}</p>
                <p className="card-text"><b>Stock: </b>{candy?.stock}</p>

                <div className="col-sm-12 mt">
                    {!agg ?
                        <div>
                            <ItemCount setAgg={setAgg} counter={counter} setCounter={setCounter} stock="10" />
                            <div className="butCen">
                                <button type="button-lg" className="btn btn-outline-success col-sm-6 top" onClick={onAdd}>Agregar al Carrito</button>
                            </div>
                        </div>
                        :
                        <div>
                            <img className="navbar-brand logo " href="Tick" src={Tick} alt="ImgLogo"></img>
                            <p className=""><b>Producto Agregado</b></p>
                            <NavLink type="button-sm" to={`/`} className="btn btn-outline-danger">Más Productos </NavLink>
                            <NavLink type="button-sm" to={`/cart`} className="btn btn-outline-success but">Ir al carrito </NavLink>
                        </div>
                    }

                </div>
            </div>




        </div>


    </>
}

export default ItemDetail
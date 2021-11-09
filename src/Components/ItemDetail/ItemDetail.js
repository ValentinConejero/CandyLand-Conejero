import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom"
import Tick from "../../Assets/img/Tick.png"

const ItemDetail = ({ candy ,count ,setCount }) => {

    const [agg, setAgg] = useState(false);

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
                        <ItemCount setAgg={setAgg} count={count} setCount={setCount} stock="10" />
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
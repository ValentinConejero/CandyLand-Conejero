import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ candy, count, setCount }) => {
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
            
            </div>
            <div className="col-sm-12 mt">
            <ItemCount count={count} setCount={setCount} stock="10" />
            </div>

            

        </div>


    </>
}

export default ItemDetail
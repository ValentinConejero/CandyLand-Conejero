import "./Item.css"


const Item = ({product}) => {
    console.log(product.img)
    return <div className="row col">
        <div className="card box back col-sm-4">
            <img className="card-img-top tami" src={product?.img} alt="Card image cap"></img>
            <div className ="card-body">
            <h5 className ="card-title let">{product?.name}</h5>
            <p className ="card-text"><spam className="let">Sabores: </spam>{product?.sabores}.</p>
            <p className ="card-text"><spam className="let">Unidades x Caja: </spam>{product?.unidades}u.</p>
            <p className ="card-text"><spam className="let">Precio: </spam>${product?.precio}.</p>
            <a href="#" class ="btn btn-primary">Ver Más</a>
            </div>
        </div>
    </div>


}

export default Item

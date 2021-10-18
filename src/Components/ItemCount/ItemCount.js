import "./ItemCount.css"

const ItemCount = ({count, setCount, stock}) => {
    const resta = () => {
        if(count > 0){
            setCount(count - 1);
        }
    }
    const suma = () => {
        if(count < stock ){
            setCount(count + 1);
        }
    }
    
    return <>
        <div className="cent col-sm-4 container pad">
            <div className="row col-sm-12 mar">
            <button className="btn btn-danger col-sm-2 masmeno" onClick={resta}>-</button>
            <input className="col-sm-6 inputc" tipe="number" value={count}/>
            <button className="btn btn-danger col-sm-2 masmeno" onClick={suma}>+</button>
            </div>
            <button type="button-lg" className="btn btn-outline-success col-sm-6 top">Agregar al Carrito</button>
        </div>


    </>
}

export default ItemCount
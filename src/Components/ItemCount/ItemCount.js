import "./ItemCount.css"
import React, {useState} from 'react';

const ItemCount = ({setAgg, count, setCount, stock}) => {

    const [counter, setCounter] = useState(0);


    const resta = () => {
        if(counter > 0){
            setCounter(counter - 1);
        }
    }
    const suma = () => {
        if(counter < stock ){
            setCounter(counter + 1);
        }
    }
    const onAdd = () => {
        setCount(counter + count)
        setAgg(true)
    }

    
    return <>
            <div className="row col-sm-12 mar">
            <button className="btn btn-danger col-sm-2 masmeno" onClick={resta}>-</button>
            <input className="col-sm-6 inputc" tipe="number" value={counter}/>
            <button className="btn btn-danger col-sm-2 masmeno" onClick={suma}>+</button>
            <button type="button-lg" className="btn btn-outline-success col-sm-6 top" onClick={onAdd}>Agregar al Carrito</button>
            </div>
    </>
}

export default ItemCount
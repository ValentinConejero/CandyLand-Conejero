import "./ItemCount.css"

const ItemCount = ({counter, setCounter, stock}) => {

    


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
    
    return <>
            <div className="row col-sm-12 mar">
            <button className="btn btn-danger col-sm-2 masmeno" onClick={resta}>-</button>
            <input className="col-sm-6 inputc" tipe="number" value={counter}/>
            <button className="btn btn-danger col-sm-2 masmeno" onClick={suma}>+</button>
           
            </div>
    </>
}

export default ItemCount
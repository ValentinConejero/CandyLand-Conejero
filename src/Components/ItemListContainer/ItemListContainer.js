import ItemCount from "../ItemCount/ItemCount"
import "./ItemListStyle.css"


const ItemListContainer = ({ count, setCount }) => {
    return <>
    
        <div className="center container" >
            <h1 className="orange font  block"><spam className="red font"> Candy</spam>Land </h1>
        </div>
        <div className="center container">
            <h2 className="font block"> ...Pagina en construccion... </h2>
        </div>

        <ItemCount count={count} setCount={setCount} stock="10" />
    </>
}
export default ItemListContainer
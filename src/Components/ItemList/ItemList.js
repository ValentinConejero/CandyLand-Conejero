import Item from "../Item/Item.js"
import "./itemList.css"

const ItemList = ({ productos }) => {
    return <div className="row margincancel cancelMarg">
        {
            productos.map(product => (<Item key={product.id} product={product} />))
        }
    </div>

}

export default ItemList

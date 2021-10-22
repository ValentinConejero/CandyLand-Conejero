import Item from "../Item/Item.js"

const ItemList = ({productos}) => {
    return <div className="row">
        {
            productos.map(product => (<Item key={product.id} product = {product} />))
        }
    </div>
    
}

export default ItemList

import Item from "../Item/Item.js"

const ItemList = ({products}) => {
    return <div className="row">
        {
            products.map(product => (<Item product = {product} />))
        }
    </div>
    
}

export default ItemList

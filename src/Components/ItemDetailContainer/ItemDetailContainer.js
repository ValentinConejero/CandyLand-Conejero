import { useState, useEffect } from "react";
import { useParams } from "react-router";
import products from "../../Assets/Productos/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = ({count, setCount}) => {

    const [candy, setCandy] = useState([])
    const { id } = useParams()
    
    useEffect(() => {

        const list = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products)
            }, 2000)

        });

        list.then(list => {
            const detail = list.find(prod => prod.id === id)

            setCandy(detail)

        }

        );
    }, [id]);

    return <>
    <ItemDetail candy={candy} count={count} setCount={setCount} />

    </>


}

export default ItemDetailContainer

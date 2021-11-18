import { useState, useEffect } from "react";
import { useParams } from "react-router";
import products from "../../Assets/Productos/Productos"
import ItemDetail from "../ItemDetail/ItemDetail"
import {getDoc, doc } from "firebase/firestore"
import {getFirestore} from "../../FireBase/index"



const ItemDetailContainer = ({ count, setCount }) => {

    const [candy, setCandy] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore();

        getDoc(doc(db, "Productos", id)).then(snapshot => {
            const produ = { id: snapshot.id, ...snapshot.data()}
            setCandy(produ)
        })

    }, [id]);

    return <>
        <ItemDetail candy={candy} count={count} setCount={setCount} />

    </>


}

export default ItemDetailContainer

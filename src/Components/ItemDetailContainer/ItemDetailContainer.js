import { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { getFirestore } from "../../FireBase/index"
import Loading from "../Loading/Loading"



const ItemDetailContainer = ({ count, setCount }) => {

    const [candy, setCandy] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore();

        getDoc(doc(db, "Productos", id)).then(snapshot => {
            const produ = { id: snapshot.id, ...snapshot.data() }
            setCandy(produ)
        })

    }, [id]);

    if (candy.length === 0) {
        return (
            <Loading />
        )
    }

    return <>
        <ItemDetail candy={candy} count={count} setCount={setCount} />

    </>


}

export default ItemDetailContainer

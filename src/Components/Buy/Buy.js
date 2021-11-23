import { useEffect, useState } from 'react';
import { getDoc, doc } from "firebase/firestore"
import { getFirestore } from "../../FireBase/index"
import "./Buy.css"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext/CartContext"

const Buy = () => {

    const { id } = useContext(CartContext);
    
    return (
        <div className="txtcen">
            <h1><b>FINALIZE SU COMPRA</b></h1>
            <h5>El id de su orden es: <b>{id}</b></h5>
        </div>
    )

}

export default Buy
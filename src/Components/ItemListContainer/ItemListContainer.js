import ItemList from "../ItemList/ItemList"
import "./ItemListStyle.css"
import React, { useState, useEffect } from 'react';
import products from "../../Assets/Productos/Productos"
import { useParams } from "react-router";
import { capt } from "../../Assets/Funciones";
import { collection, getDocs, query, where } from "firebase/firestore"
import {getFirestore} from "../../FireBase/index"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    console.log(category)
    useEffect(() => { 

        const db = getFirestore();

        if(!category){ 

            getDocs(collection(db, "Productos")).then(snapshot => {
                const produc = snapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
                })
                setProductos(produc)
            }).catch((error) => {
                console.log("error al buscar producto", error)
            })
            return (() => {
                setProductos([])
            }, [category]);
        }  
        else{
            getDocs(query(collection(db, "Productos"),where("category", "==", category ))).then((querySnapshot) => {
                const produc = querySnapshot.docs.map(doc => {
                    return {id: doc.id, ...doc.data()}
            })
            setProductos(produc)
        }).catch((error) => {
            console.log("Error no se encontro el producto", error)
        })
      
        }
      
        return (() => {
                    setProductos([])
                })
    },  [category])
    

    return <>

        {(!category)?
             <div className="center container col-sm-12" >
             <h1 className="orange font  block"><p className="red font"> NUESTROS</p>PRODUCTOS </h1>
             </div>
        :
            <div className="center container col-sm-12" >
                <h1 className="pink  block"><b>{capt(category)}</b></h1>
            </div>
        }

       


       
        <ItemList productos={productos} />
    </>
}









export default ItemListContainer
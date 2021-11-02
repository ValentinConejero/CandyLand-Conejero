import ItemList from "../ItemList/ItemList"
import "./ItemListStyle.css"
import React, { useState, useEffect } from 'react';
import products from "../../Assets/Productos/Productos"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {

        const list = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products)
            }, 2000)
    
        });

        list.then(
                list => {
                    setProductos(list);
                    
                },
                
            );
    }, []);


    return <>

        <div className="center container col-sm-12" >
            <h1 className="orange font  block"><p className="red font"> NUESTROS</p>PRODUCTOS </h1>
        </div>


       
        <ItemList productos={productos} />
    </>
}









export default ItemListContainer
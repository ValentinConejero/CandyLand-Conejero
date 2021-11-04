import ItemList from "../ItemList/ItemList"
import "./ItemListStyle.css"
import React, { useState, useEffect } from 'react';
import products from "../../Assets/Productos/Productos"
import { useParams } from "react-router";
import { capt } from "../../Assets/Funciones";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const {category} = useParams();

    console.log(category)
    useEffect(() => {

        const list = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products)
            }, 2000)
    
        });

        list.then(
            list => {
                setProductos(list)
                if(!category){
                    setProductos(list);
                }
                else{
                    const prodCategory = list.filter(prod => prod.category.toLowerCase() === category)
                    
                    setProductos(prodCategory)
                    
                }
        } )
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
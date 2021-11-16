import "./CartItem.css"
import Delete from "../../Assets/img/Delete.png"
import { CartContext } from "../../Context/CartContext/CartContext"
import { useContext } from "react"


const CartItem = ({ prod }) => {

    const { removeProd } = useContext(CartContext)

    return (

        <>


          
                <div className="row bord">

                    <div className="col-sm-2 imgcen">
                        <img src={prod.img} alt="img" className="ta" />
                    </div>
                    <div className="col-sm-2 data">
                        <p>{prod.name}</p>
                    </div>

                    <div className="col-sm-2 data">
                        <p> {prod.cantidad} </p>
                    </div>
                    <div className="col-sm-2 data">
                        <p >${prod.precio}</p>
                    </div>
                    <div className="col-sm-2 data">
                        <p className="">{prod.cantidad * prod.precio}</p>
                    </div>
                    <div className="col-sm-2 data">
                        <img className="deltam point" href="Delete" src={Delete} alt="ImagenDelete" onClick={() => removeProd(prod.id)} ></img>
                    </div>

                </div>

               
            
        </>

    )

}

export default CartItem
import { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import "./FormBuy.css"
import { CartContext } from "../../Context/CartContext/CartContext"
import Input from "../../Components/Input/input"



const FormBuy = () => {

    const { setBuyer } = useContext(CartContext)

    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [direccion, setDireccion] = useState("");
    const [codPost, setCodPost] = useState("");
    const [ciudad, setCiudad] = useState("");

    let history = useHistory();

    const sendForm = (e) => {
        e.preventDefault();
        const buyerData = {
            email,
            telefono,
            nombre,
            apellido,
            direccion,
            codPost,
            ciudad,
        }
        setBuyer(buyerData)
        history.push("/cart")

    }



    return (
        <div>
            <div className="txtcen">
                <h1><b>FORMULARIO DE ENVIO</b></h1>
            </div>

            <form className="form" onSubmit={sendForm}>
                <div class="row formMarg">
                    <div class="form-group col-sm-6">
                        <Input mb="mb-3" type="email" value={email} setValue={setEmail} label="Email" />
                    </div>
                    <div class="form-group col-sm-6">
                        <Input mb="mb-3" type="number" value={telefono} setValue={setTelefono} label="Telefono" />
                    </div>
                    <div class="form-group col-sm-6">
                        <Input mb="mb-3" type="text" value={nombre} setValue={setNombre} label="Nombre" pattern="[a-zA-Z]{1,15}" title />
                    </div>
                    <div class="form-group col-sm-6">
                        <Input mb="mb-3" type="text" value={apellido} setValue={setApellido} label="Apellido" pattern="[a-zA-Z]{1,15}" />
                    </div>
                </div>
                <div class="row formMarg">
                    <div class="form-group col-sm-6">
                        <Input mb="mb-3" type="text" value={direccion} setValue={setDireccion} label="Direccion" />
                    </div>
                    <div class="form-group col-sm-6">
                        <Input mb="mb-3" type="number" value={codPost} setValue={setCodPost} label="Codigo Postal" />
                    </div>
                </div>
                <div class="row formMarg">
                    <div class="form-group col-sm-12">
                        <Input mb="mb-3" type="text" value={ciudad} setValue={setCiudad} label="Ciudad" pattern="[a-zA-Z]{1,15}"/>
                    </div>
                </div>
                <div className="btns">
                    <button type="submit" class="btn btn-success">Guardar</button>

                </div>
            </form>


        </div>
    )

}

export default FormBuy
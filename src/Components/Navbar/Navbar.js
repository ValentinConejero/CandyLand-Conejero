import Logo from "../../Assets/img/candylandT.png"
import "./Navbar.css"
import Cart from "../CartWidget/CartWidget.js"

const Navbar = ({count}) => {
    return <>
        <nav className="navbar navbar-expand-sm navbar-light  nav">
            <img className="navbar-brand logo" href="CandyLand" src={Logo} alt="ImgLogo"></img>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse center" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="dangerouslySetInnerHTML">Inicio <span className="sr-only"></span></a>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="dangerouslySetInnerHTML" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Productos
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className="dropdown-item">Bombones</li>
                            <li className="dropdown-item">Paletas</li>
                            <li className="dropdown-item">Caramelos</li>
                            <li className="dropdown-item">Alfajores</li>
                            <li className="dropdown-item">Cubanitos</li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="dangerouslySetInnerHTML">Sobre nosotros...</a>
                    </li>
                </ul>
              
            </div>
            <Cart count={count}/>
        </nav>


    </>;


}
export default Navbar
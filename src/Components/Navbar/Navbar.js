import Logo from "../../Assets/img/candylandT.png"
import "./Navbar.css"
import Cart from "../CartWidget/CartWidget.js"
import {NavLink, Link} from "react-router-dom"
import Category from "../../Assets/Categorias/Category"
import { capt } from "../../Assets/Funciones"

const Navbar = ({count}) => {
    console.log(Category)
    return <>
        <nav className="navbar navbar-expand-sm navbar-light  nav">
            <Link to='/' >
            <img className="navbar-brand logo" href="CandyLand" src={Logo} alt="ImgLogo"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse center" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <Link to='/' >
                        <a className="nav-link"><b>Inicio</b><span className="sr-only"></span></a>
                    </Link>
                    </li>
                    
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="dangerouslySetInnerHTML" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <b>Productos</b>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {Category.map(cat =>
                                <NavLink to={`/category/${cat.category}`} key={cat.id} className="dropdown-item colorD">
                                    <li>{capt(cat.category)}</li>
                                </NavLink>)
                            }
                        </ul>
                         
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href=""><b>Sobre nosotros...</b></a>
                    </li>
                </ul>
              
            </div>
            <Cart count={count}/>
        </nav>


    </>;


}
export default Navbar
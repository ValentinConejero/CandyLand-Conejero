import Logo from "../../Assets/img/candylandT.png"
import "./Navbar.css"

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg navbar-light  nav">
            <img class="navbar-brand logo" href="CandyLand" src={Logo}></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="dangerouslySetInnerHTML">Inicio <span class="sr-only"></span></a>
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

                    <li class="nav-item">
                        <a class="nav-link" href="dangerouslySetInnerHTML">Sobre nosotros...</a>
                    </li>
                </ul>
            </div>
        </nav>


    </>;


}
export default Navbar
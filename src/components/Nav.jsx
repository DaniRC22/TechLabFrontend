import { Link } from "react-router-dom";

function Nav() {  
    return (  
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>  
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0 }}>  
                <li style={{ color: "white", textDecoration: "none" }}>
                    <Link to={'/'}>Inicio</Link>
                </li>  
                <li style={{ color: "white", textDecoration: "none" }}>
                    <Link to={'/about'}>
                    Acerca de
                    </Link>
                    </li>  
                    <li>
                        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
            🛒 Carrito
          </Link>
                    </li>
            </ul>  
        </nav>  
    );  
}  


export default Nav; 
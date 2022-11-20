import { NavLink } from "react-router-dom";
import data from "../../assets/data.json"
import "./footer.css"

const basename = data["basename"]

const Footer = (props) => {

    return (
        // <footer className="fixed-bottom">
        <footer>

            <ul className="nav d-flex justify-content-center border-bottom pb-3 mb-3 pt-4"> 
                <li className="nav-item px-2"> <NavLink className="link" to={basename+"/avisoLegal"} > Aviso Legal</NavLink> </li>
                <li className="nav-item px-2"> <NavLink className="link" to={basename+"/politicaCookies"}> Política de Cookies </NavLink> </li>
                <li className="nav-item px-2"> <NavLink className="link" to={basename+"/politicaPrivacidad"}> Política de Privacidad  </NavLink> </li>
            </ul>

            <p className="text-center text-muted">
                
                © 2022 Núñez Cano, Marcos  Todos los derechos reservados
            </p>


        </footer>


    );

}

export default Footer;
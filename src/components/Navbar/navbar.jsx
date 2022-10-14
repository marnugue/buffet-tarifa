import { NavLink } from "react-router-dom";
import logo from "../../assets/react.svg"
import "./navbar.css"
import classes from  "./navbar.module.css"

const STYLE = ({isActive}) => ({
  color:"white",
  textDecoration:  isActive? "underline": "none"

})

const Navbar = (props) => {

    return (
    
    <nav className="navbar shadow mb-3 p-0" style={{backgroundImage: "url('madera.jpg')", backgroundRepeat:"repeat" ,backgroundSize: "cover"}}>
    
      <div className="navbar-brand p-0">
        {/* <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
        <div style={{fontFamily:"KuenstlerScriptW01-2Bold",color:"white",fontSize:40}}>Marcos Núñez Cano</div>
      </div>
      <ul className="navbar-nav flex-row">
        <li className="nav-item text-light p-2"> <NavLink to="/home" style={STYLE} className="nav-link">Inicio</NavLink></li>
        <li className="nav-item p-2"><NavLink to="/services" style={STYLE} className="nav-link">Servicios</NavLink></li>
        <li className="nav-item p-2"> <NavLink to="/contact" style={STYLE} className="nav-link">Contacto</NavLink></li>        
      </ul>
    
  </nav>);
}

export default Navbar;
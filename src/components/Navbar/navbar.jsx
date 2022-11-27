import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/react.svg"
import "./navbar.css"
import classes from  "./navbar.module.css"
import data from "../../assets/data.json"

const STYLE = ({isActive}) => ({
  color:"white",
  textDecoration:  isActive? "underline": "none"

})

const basename = data["basename"]

const BackgroundColor = {color: "rgb(255,255,255, 0)"}
// const Font = {fontFamily:"KuenstlerScriptW01-2Bold",color:"white",fontSize:40}
const Font = {fontFamily:"RED MIST",color:"white",fontSize:40}

const Navbar = (props) => {

    return (
      // style={{backgroundImage: "url('madera.jpg')", backgroundRepeat:"repeat" ,backgroundSize: "cover"}}
    <nav className="navbar shadow navbar-expand-md mb-0 p-0" >
    
      <div className="navbar-brand p-0">
        {/* <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/> */}
        <div style={Font}>Marcos Núñez Cano</div>
      </div>
      <button className="navbar-toggler ml-auto custom-toggler border-0" type=""data-bs-toggle="collapse" data-bs-target="#navbar" style={BackgroundColor}>
			<span className="navbar-toggler-icon"></span>
		</button>
      <div className="navbar-collapse collapse flex-row" id="navbar">
        <ul className="navbar-nav  mr-auto">
          <li className="nav-item text-light p-2"> <NavLink to={basename+"/home"} style={STYLE} className="nav-link" >Inicio</NavLink></li>
          <li className="nav-item p-2"><NavLink to={basename+"/services"} style={STYLE} className="nav-link">Servicios</NavLink></li>
          <li className="nav-item p-2"> <NavLink to={basename+"/contact"} style={STYLE} className="nav-link">Contacto</NavLink></li>        
        </ul>
      </div>
  </nav>);
}

export default Navbar;
import "./corrusel.css"
import db from "../../../server/db.json"
import { bottom } from "@popperjs/core";
import LazyImage from "../LazyImage/Lazy";
const Corrusel = (props) => {

    return (
<div id="carouselExampleDark" className="carousel slide" data-bs-touch="true" data-bs-interval="3000" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" >
      <LazyImage
      key={1}
      height={750}
      width={db[6].width}
      src={db[6].name}
      blurhash={db[6].blurhash}
      />
      {/* <img src="DSC_0013.JPG" className="d-block w-100 " height="350" alt="..."/> */}
      <div className="carousel-caption h-50 ">
        <div className="row text-center justify-content-center">
        <div className=" col-10 col-sm-8 col-md-5 col-lg-4 rounded-3 roundedCard" >        
        <h5 className="pt-1">No dude en consultar</h5>
        <p className="">Facilitamos su consulta, asistencia y defensa en todo tipo de demandas del ámbito de materias de nuestro despacho.</p>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" >
    <LazyImage
      key={1}
      height={750}
      width={db[3].width}
      src={db[3].name}
      blurhash={db[3].blurhash}
      />
      <div className="carousel-caption h-50 ">
        <div className="row text-center justify-content-center">
        <div className="col-10 col-sm-8 col-md-5 col-lg-4 rounded-3 roundedCard" >        
        <h5 className="pt-1">Trato cercano</h5>
        <p className="">Pondremos a su disposición un trato cercano, personalizado y honesto.</p>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" >
      {/* <img src="DSC_0001.JPG" className="d-block w-100" height="350" alt="..."/> */}
      <LazyImage
      key={1}
      height={750}
      width={db[8].width}
      src={db[8].name}
      blurhash={db[8].blurhash}
      
      />
      <div className="carousel-caption h-50 ">
        <div className="row text-center justify-content-center">
        <div className=" col-10 col-sm-8 col-md-5 col-lg-4 rounded-3 roundedCard" >        
        <h5 className="pt-1">La mejor solución a su caso</h5>
        <p className="">Le defenderemos su caso buscando la mejor solución posible para sus intereses.</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    );

}

export default Corrusel
import "./corrusel.css"
import db from "../../../server/db.json"
import { bottom } from "@popperjs/core";
import LazyImage from "../LazyImage/Lazy";
const Corrusel = (props) => {

    return (
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="4000">
      <LazyImage
      key={1}
      // height={750}
      src={db[6].name}
      blurhash={db[6].blurhash}
      />
      {/* <img src="DSC_0013.JPG" className="d-block w-100 " height="350" alt="..."/> */}
      <div className="carousel-caption d-none d-sm-block h-25 ">
        <div className="row text-center justify-content-center">
        <div className=" col-3 col-md-4 rounded-3 roundedCard" >        
        <h5 className="pt-1">First slide label</h5>
        <p className="d-none d-md-block">Some representative placeholder content for the second slide.</p>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="40000">
    <LazyImage
      key={1}
      height={750}
      src={db[3].name}
      blurhash={db[3].blurhash}
      />
      <div className="carousel-caption d-none d-sm-block h-25 ">
        <div className="row text-center justify-content-center">
        <div className=" col-4 rounded-3 roundedCard" >        
        <h5 className="pt-1">Second slide label</h5>
        <p className="d-none d-md-block">Some representative placeholder content for the second slide.</p>
        </div>
        </div>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      {/* <img src="DSC_0001.JPG" className="d-block w-100" height="350" alt="..."/> */}
      <LazyImage
      key={1}
      height={750}
      src={db[8].name}
      blurhash={db[8].blurhash}
      />
      <div className="carousel-caption d-none d-sm-block h-25 ">
        <div className="row text-center justify-content-center">
        <div className=" col-4 rounded-3 roundedCard" >        
        <h5 className="pt-1">Third slide label</h5>
        <p className="d-none d-md-block">Some representative placeholder content for the second slide.</p>
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
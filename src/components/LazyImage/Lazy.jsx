import React, { useState } from 'react';
import {Blurhash} from "react-blurhash"
import { LazyLoadImage } from 'react-lazy-load-image-component';


const LazyImage = (props) => {
  
  const [isLoaded, setLoaded] = useState(false);
  const [isLoadStarted, setLoadStarted] = useState(false);

  console.log(props);

  const handleLoad = () => {
    console.log("loaded");
    setLoaded(true);
  };

  const handleLoadStarted = () => {
    console.log("Started: ");
    setLoadStarted(true);
  };

  return (
    <LazyLoadImage
      src={props.src} // use normal <img> attributes as props
      height={props.height}
      effect="blur"
      onLoad={handleLoad}
      beforeLoad={handleLoadStarted}
      // delayTime={7000}
      className="d-block w-100"
      style={{objectFit: "cover"}}
      />
  
);
}

export default LazyImage;

//    <figure>
    //    <div class="crop-height">
    //      <img class="scale" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/photo-wedding_1200x800.jpg" alt="wedding" />
    //    </div> <!-- end .crop-height -->
    //    <figcaption>
    //      This crops from the bottom. When you resize past 700px, the bride disappears.
    //    </figcaption>
    //  </figure>
    
import Carousel from "react-bootstrap/Carousel";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";

import classes from "./Slider.module.css";

function Slider() {
  return (
    <>
      <hr />
      <div className={classes.slider}>
        <Carousel fade>
          <Carousel.Item className={classes.item}>
            <img className="d-flex w-100" src={slider1} alt="Laptop" />
            <Carousel.Caption>
              <h3>Laptops</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 darken" src={slider2} alt="Mobile" />

            <Carousel.Caption>
              <h3>Mobiles</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={slider3} alt="Camera" />

            <Carousel.Caption>
              <h3>Cameras</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr />
    </>
  );
}

export default Slider;

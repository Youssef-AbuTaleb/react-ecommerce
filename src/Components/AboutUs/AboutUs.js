import classes from "./AboutUs.module.css";
import logo from "../../assets/logo.png";

const AboutUs = () => {
  return (
    <div>
      <div className={classes["aboutCover"]}>
        <h1>
          <img src={logo} alt="site logo" className={classes["nav-img"]} />
          {` `}React Ecommerce
        </h1>
        <img
          className={classes["cover-img"]}
          src="./images/AboutImage.jpg"
          alt=""
        />
      </div>
      <section className={classes["about-us"]}>
        <h1>About us</h1>
        <ul>
          <li>
            <h3>Who are we ?</h3>
            <p>
              We are React E-commerce Store one of the biggest sites to sell
              online products and ships it to the desired address. Our biggest
              concern is the satisfaction of our costumers, And our motto is
              that the client is always right
            </p>
          </li>
          <li>
            <h3>Why choose us?</h3>
            <p>
              We guarantee that products will meet your expectations and we
              always try to deal with official and safe stores to make sure your
              buying process is totally safe. If the product has any issues or
              problems due to shipping, you are always free to refund it and our
              customer serivce will be happy to help.
            </p>
          </li>
          <li>
            <h3>Where is our main branch?</h3>
            <p>
              Our main branch is located in Egypt we hope that all our costumers
              around the world are satisfied.
            </p>
          </li>
          <li>
            <h3>Our Products.</h3>
            <p>
              We have a big collection of high quality products. At the moment
              we are specialized at selling electronics like cameras, laptops
              and phones. We are looking forward to sell other types of prodcuts
              to fullfill your requirements and keep costumers satisfied
            </p>
          </li>
          <li>
            <h3>Our costumer serivce.</h3>
            <p>
              Our costumer serivce is available 7 days / 24 hour you can easily
              contact costumer service on the hot line 12345, you can also chat
              with us or contact us using our official mail.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;

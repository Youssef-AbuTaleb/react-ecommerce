import ProductsSummary from "./ProductsSummary";
import RandomProducts from "./RandomProducts";
import Slider from "./Slider";
import GoUpButton from "../UI/GoUpButton";
import { Button } from "react-bootstrap";

import classes from "./Home.module.css";
const Home = () => {
  return (
    <>
      <ProductsSummary />
      <Slider />
      <RandomProducts cat="cameras" />
      <RandomProducts cat="laptops" />
      <RandomProducts cat="mobiles" />
      <a className={classes.button} href="/products">
        <Button variant="outline-danger mb-3" size="lg">
          Go To Products
        </Button>
      </a>
      <GoUpButton />
    </>
  );
};

export default Home;

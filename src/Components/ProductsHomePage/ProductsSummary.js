import classes from "./ProductsSummary.module.css";

const ProductsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Great Quality, Delivered To You</h2>
      <p>
        Choose your product from our broad selection of available electronics
        and enjoy our sales and offers.
      </p>
      <p>
        All our products are guaranteed to have high-quality, just-in-time and
        of course by good prices!
      </p>
    </section>
  );
};

export default ProductsSummary;

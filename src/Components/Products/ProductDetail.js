import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import products from "../ProductsJSON/products.json";
import classes from "./ProductDetail.module.css";
import { Button } from "react-bootstrap";

const ProductDetail = (props) => {
  let { id } = useParams();
  let item = products.find((item) => item.id === +id);

  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: item.id,
      name: item.title,
      amount: 1,
      price: item.price,
    });
  };
  return (
    <>
      <h1 className={classes.title}>Product Details</h1>
      <div className={classes.container}>
        <div className={classes.imgTitle}>
          <img src={item.imageSrc} alt="product" />
        </div>
        <div className={classes.info}>
          <h1>Product name: {item.title}</h1>
          <ul>
            <li>Description : {item.description}</li>
            <li>
              Product Code: {item.category}
              {item.id}
            </li>
            <li>
              Price : ${item.price}
              {`  `}
              <span className={classes.offer}>${item.price - 3}</span>
            </li>
          </ul>
          <Button onClick={addToCartHandler} variant="danger mx-3">
            Add to cart
          </Button>
          <a href="/products">
            <Button variant="outline-dark mx-3">Go Back to Products</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

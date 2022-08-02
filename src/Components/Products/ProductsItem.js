import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import CartContext from "../../context/cart-context";
import classes from "./ProductsItem.module.css";

const ProductsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.item.price.toFixed(2)}`;

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.item.id,
      name: props.item.title,
      amount: 1,
      price: props.item.price,
    });
  };

  return (
    <div className={classes.item} key={props.item.id}>
      <Card style={{ width: "14rem" }} className={`${classes.card} m-3`}>
        <a href={`http://localhost:3000/products/${props.item.id}`}>
          <Card.Img variant="bottom" src={props.item.imageSrc} />
        </a>
        <Card.Body>
          <Card.Title>{props.item.title}</Card.Title>
          <Card.Text>
            {`${props.item.description.substring(0, 40)} ...`}.
          </Card.Text>
          <Card.Text className={classes.price}>{price}</Card.Text>
          <Button
            onClick={addToCartHandler}
            size="lg"
            variant="success"
            className="align-self-center"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductsItem;

import products from "../ProductsJSON/products.json";

import classes from "././RandomProducts.module.css";

import { Card, Button } from "react-bootstrap";
const RandomProducts = (props) => {
  const category = props.cat;

  let categoryArray = products.filter((item) => item.category === category);

  let randomArray = [];
  for (let i = 0; i < 3; i++) {
    const randomItem = categoryArray[Math.floor(Math.random() * (10 - i))];
    randomArray.push(randomItem);
    categoryArray = categoryArray.filter((item) => item.id !== randomItem.id);
  }

  const title = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <h1 className={classes.title}>{`Check ${title} Section`}</h1>
      <div className={classes.container}>
        {randomArray.map((item) => {
          return (
            <div className={classes.item} key={item.id}>
              <Card
                style={{ width: "14rem" }}
                className={`${classes.card} m-2`}
              >
                <Card.Img variant="bottom" src={item.imageSrc} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {`${item.description.substring(0, 40)}...`}.
                  </Card.Text>
                  <Button
                    variant="primary"
                    disabled
                  >{`$ ${item.price}`}</Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <hr />
    </>
  );
};

export default RandomProducts;

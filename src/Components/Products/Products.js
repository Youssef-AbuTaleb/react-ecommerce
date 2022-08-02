import products from "../ProductsJSON/products.json";

import classes from "./Products.module.css";

import ProductsItem from "./ProductsItem";
import GoUpButton from "../UI/GoUpButton";
import { Form } from "react-bootstrap";
import { useRef, useState } from "react";

const Products = () => {
  const selectValue = useRef();
  const [filteredProducts, setFilteredProducts] = useState(products);

  const selectChangeHandler = () => {
    const cat = selectValue.current.value;
    if (cat !== "all") {
      setFilteredProducts(products.filter((item) => item.category === cat));
    } else {
      setFilteredProducts(products);
    }
  };

  return (
    <>
      <h1 className={classes.title}>Products Section</h1>
      <Form.Select
        onChange={selectChangeHandler}
        className={classes.select}
        size="lg"
        aria-label="Filter Category"
        ref={selectValue}
      >
        <option>Select Category Filter</option>
        <option value="all">All</option>
        <option value="mobiles">Mobiles</option>
        <option value="laptops">Laptops</option>
        <option value="cameras">Cameras</option>
      </Form.Select>
      <div className={`${classes.container} my-5`}>
        {filteredProducts.map((item) => {
          return <ProductsItem key={item.id} item={item} />;
        })}
      </div>
      <GoUpButton />
    </>
  );
};

export default Products;

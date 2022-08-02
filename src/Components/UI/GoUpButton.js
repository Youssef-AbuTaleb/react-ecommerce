import { useState } from "react";
import { Button } from "react-bootstrap";

import { ArrowUpCircle } from "react-bootstrap-icons";

import classes from "./GoUpButton.module.css";

const GoUpButton = () => {
  const [show, setShow] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      setShow(true);
    } else {
      setShow(false);
    }
  });

  const goUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {show && (
        <Button className={classes.button} variant="outline" onClick={goUp}>
          <ArrowUpCircle color="#142850" size={35} />
        </Button>
      )}
    </>
  );
};

export default GoUpButton;

import React, { useRef, useState } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const emailRef = useRef();
  const usernameRef = useRef();
  const [validEmail, setValidEmail] = useState(true);
  const [validUsername, setValidUsername] = useState(true);

  const emailReg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const emailChangeHandler = (event) => {
    if (emailReg.test(event.target.value)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
    console.log("checked");
  };
  const usernameChangeHandler = (event) => {
    if (event.target.value.trim().length >= 3) {
      setValidUsername(true);
    } else {
      setValidUsername(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      usernameRef.current.value.length === 0 &&
      emailRef.current.value.length === 0
    ) {
      setValidUsername(false);
      setValidEmail(false);
      return;
    }
    if (emailRef.current.value.length === 0) {
      setValidEmail(false);
      return;
    }
    if (usernameRef.current.value.length === 0) {
      setValidUsername(false);
      return;
    }

    emailRef.current.value = "";
    usernameRef.current.value = "";
  };
  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <form onSubmit={submitHandler} id="form" className={classes["form"]}>
          <h2>Contact Us</h2>
          <div className={classes["form-control"]}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              ref={usernameRef}
              onChange={usernameChangeHandler}
            />
            {!validUsername && (
              <p className={classes.error}>Please enter a valid username</p>
            )}
          </div>
          <div className={classes["form-control"]}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Enter email"
              ref={emailRef}
              onChange={emailChangeHandler}
            />
            {!validEmail && (
              <p className={classes.error}>Please enter a valid email</p>
            )}
          </div>
          <button disabled={!validEmail || !validUsername} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

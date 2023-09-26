import Card from "../UI/Card";
import styles from "./SignupForm.module.css";
import { useContext, useReducer, useState, useEffect } from "react";
import AuthContext from "../../store/auth-context";

const defaultValue = { value: "" };
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") return { value: action.val };

  if (action.type === "INPUT_BLUR") return { value: state.value };

  return { value: "" };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") return { value: action.val };

  return { value: "", isValid: false };
};

const SignupForm = (props) => {
  const ctx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, defaultValue);
  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    defaultValue
  );

  const actionsHandler = () => {
    props.onActions(false);
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onSignup(emailState.value, passwordState.value);
    props.onActions(false);
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={submitHandler}>
        <h2>Welcome</h2>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="Username@email.com"
            value={emailState.value}
            onChange={emailChangeHandler}
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            placeholder="Password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="label-remember-me" />
          <label for="label-remember-me">Remember me</label>
        </div>
        <div className={styles.actions}>
          <button type="submit">Sign up</button>
          <p>Forgot username/password &gt;</p>
          <p onClick={actionsHandler}>Have an account? Log in now &gt;</p>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;

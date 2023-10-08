import Card from "../UI/Card";
import styles from "./SignupForm.module.css";
import { useContext, useReducer, useState, useEffect } from "react";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.includes("@") };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.includes("@") };

  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.val, isValid: action.val.trim().length >= 8 };

  if (action.type === "INPUT_BLUR")
    return { value: state.value, isValid: state.value.trim().length >= 8 };

  return { value: "", isValid: false };
};

const SignupForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const ctx = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const myTimeOut = setTimeout(() => {
      console.log("In Effect");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("Clean up");
      clearTimeout(myTimeOut);
    };
  }, [emailIsValid, passwordIsValid]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const actionsHandler = () => {
    props.onActions(false);
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  };

  const lastNameHandler = (event) => {
    setLastName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let isValidEmail = true;
    for (let i = 0; i < ctx.users.length; i++) {
      if (emailState.value === ctx.users[i].attributes.email) {
        isValidEmail = false;
        break;
      }
    }
    if (isValidEmail) {
      ctx.onSignup(firstName, lastName, emailState.value, passwordState.value);
      props.onActions(false);
    } else alert("Email is already registered. Please try different email. ");
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={submitHandler}>
        <h2>Welcome</h2>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={firstNameHandler}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={lastNameHandler}
            required
          />
        </div>
        <div
          className={`${styles.input} ${
            emailState.isValid === false ? styles.invalid : ""
          }`}
        >
          <input
            type="email"
            placeholder="Username@email.com"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            required
          />
        </div>
        <div
          className={`${styles.input} ${
            passwordState.isValid === false ? styles.invalid : ""
          }`}
        >
          <input
            type="password"
            placeholder="Password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            required
          />
        </div>
        <div className={styles.actions}>
          <button type="submit" disabled={!formIsValid}>
            Sign up
          </button>
          <p>Forgot username/password &gt;</p>
          <p onClick={actionsHandler}>Have an account? Log in now &gt;</p>
        </div>
      </form>
    </Card>
  );
};

export default SignupForm;

import styles from "./LoginForm.module.css";
import Card from "../UI/Card";
import AuthContext from "../../store/auth-context";
import { useContext, useState } from "react";

const LoginForm = (props) => {
  const ctx = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const actionsHandler = () => {
    props.onActions(true);
  };

  const emailInputHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordInputHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogin(email, password);
  };

  return (
    <Card className={styles.card}>
      <form onSubmit={submitHandler}>
        <h2>Welcome</h2>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="Username@email.com"
            onChange={emailInputHandler}
            value={email}
            required
          />
        </div>
        <div className={styles.input}>
          <input
            type="password"
            placeholder="Password"
            onChange={passwordInputHandler}
            value={password}
            required
          />
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="label-remember-me" />
          <label for="label-remember-me">Remember me</label>
        </div>
        <div className={styles.actions}>
          <button>Sign in</button>
          <p>Forgot username/password &gt;</p>
          <p onClick={actionsHandler}>Not enrolled? Sign up now &gt;</p>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;

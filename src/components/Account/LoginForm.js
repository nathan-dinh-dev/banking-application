import styles from "./LoginForm.module.css";
import Card from "../UI/Card";

const LoginForm = () => {
  return (
    <Card className={styles.card}>
      <form action="">
        <h2>Welcome</h2>
        <div className={styles.input}>
          <input type="text" placeholder="Username" />
        </div>
        <div className={styles.input}>
          <input type="password" placeholder="Password" />
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" id="label-remember-me" />
          <label for="label-remember-me">Remember me</label>
        </div>
        <div className={styles.actions}>
          <button>Sign in</button>
          <a href="">Forgot username/password &gt</a>
          <a href="">Not enrolled? Sign up now &gt</a>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;

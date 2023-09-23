import { blue_bg } from "../../assets";
import { enjoy_200 } from "../../assets";
import styles from "./LoginContainer.module.css";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <div>
      <div className={styles.background}>
        <img src={blue_bg} alt="" />
      </div>

      <main className={styles["main-container"]}>
        <div className={styles.main}>
          <div className={styles.description}>
            <img src={enjoy_200} alt="" />
            <div className={styles.content}>
              <p>New checking customers</p>
              <p>Open a checking account and set up direct deposit.</p>
              <button>Open an account</button>
            </div>
          </div>
        </div>
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginContainer;

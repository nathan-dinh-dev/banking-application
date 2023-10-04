import LoginContainer from "../components/Account/LoginContainer";
import Recommendation from "../components/Recommendation/Recommendation";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <main className={styles["flex-wrap"]}>
      <LoginContainer />
      <Recommendation />
    </main>
  );
};

export default HomePage;

import LoginContainer from "../components/Account/LoginContainer";
import Recommendation from "../components/Recommendation/Recommendation";
import styles from "./Home.module.css";
import AuthProvider from "../store/AuthProvider";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <main className={styles["flex-wrap"]}>
      <LoginContainer />
      <Recommendation />
    </main>
  );
};

export default HomePage;

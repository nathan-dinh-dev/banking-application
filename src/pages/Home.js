import Header from "../components/Layout/Header";
import LoginContainer from "../components/Account/LoginContainer";
import Recommendation from "../components/Recommendation/Recommendation";
import Footer from "../components/Layout/Footer";
import styles from "./Home.module.css";

const HomePage = () => {
  return (
    <main className={styles["flex-wrap"]}>
      <Header />
      <LoginContainer />
      <Recommendation />
      <Footer />
    </main>
  );
};

export default HomePage;

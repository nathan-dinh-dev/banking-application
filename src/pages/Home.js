import LoginContainer from "../components/Account/LoginContainer";
import Recommendation from "../components/Recommendation/Recommendation";
import styles from "./Home.module.css";
import AuthProvider from "../store/AuthProvider";

const HomePage = () => {
  return (
    <AuthProvider>
      <main className={styles["flex-wrap"]}>
        {/* <Header /> */}
        <LoginContainer />
        <Recommendation />
        {/* <Footer /> */}
      </main>
    </AuthProvider>
  );
};

export default HomePage;

import Card from "../UI/Card";
import styles from "./ValidSignin.module.css";
import AuthContext from "../../store/auth-context";
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const ValidSignin = () => {
  const ctx = useContext(AuthContext);
  const [isNavigate, setIsNavigate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isNavigate) {
      navigate("/myaccount");
      setIsNavigate(false);
    }
  }, [isNavigate]);

  const navigateHandler = () => {
    setIsNavigate(true);
  };

  const logoutHandler = () => {
    ctx.onLogout();
  };

  return (
    <Card className={styles.card}>
      <h1>Hi {ctx.currentLogin.firstName},</h1>
      <h5>What would you like to do today?</h5>
      <div className={styles.actions}>
        <button onClick={navigateHandler}>Go to account</button>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </Card>
  );
};

export default ValidSignin;

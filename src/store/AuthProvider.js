import { useState, useEffect } from "react";
import AuthContext from "./auth-context";
import { useNavigate } from "react-router-dom";

const AuthProvider = (props) => {
  // const navigate = useNavigate();
  const [currentLogin, setCurrentLogin] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signupHandler = (firstName, lastName, email, password) => {
    setAccounts((prevState) => [
      ...prevState,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        money: 0,
        transaction: [],
      },
    ]);
  };

  // useEffect(() => {
  //   if (isLoggedIn) navigate("/dashboard");
  // }, [isLoggedIn]);

  const loginHandler = (email, password) => {
    console.log(accounts);
    if (accounts.length === 0) alert("Account not found!");

    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].email === email && accounts[i].password === password) {
        setIsLoggedIn(true);
        setCurrentLogin(accounts[i]);
        break;
      }
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setCurrentLogin({});
  };

  const deposit = (amount) => {
    setCurrentLogin((prevState) => {
      return {
        ...prevState,
        money: parseInt(prevState.money) + parseInt(amount),
      };
    });
  };

  const withdrawal = (amount) => {
    setCurrentLogin((prevState) => {
      return {
        ...prevState,
        money: parseInt(prevState.money) - parseInt(amount),
      };
    });
  };

  const authContext = {
    users: accounts,
    isLoggedIn: isLoggedIn,
    currentLogin: currentLogin,
    onLogout: logoutHandler,
    onLogin: loginHandler,
    onSignup: signupHandler,
    onDeposit: deposit,
    onWithdrawal: withdrawal,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

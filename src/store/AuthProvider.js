import { useEffect, useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [currentLogin, setCurrentLogin] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [triggerFetched, setTriggerFetched] = useState(false);

  useEffect(() => {
    console.log("use effect ran");
    fetch("http://localhost:1337/api/accounts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const accountsFetched = data.data;
        setAccounts(accountsFetched);
      });
  }, [triggerFetched]);

  const signupHandler = (firstName, lastName, email, password) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
          balance: 0,
          transaction: [],
        },
      }),
    };

    fetch("http://localhost:1337/api/accounts/", requestOptions)
      .then((res) => res.json())
      .then((res) => {
        setTriggerFetched((prevState) => !prevState);
      });
  };

  const loginHandler = (email, password) => {
    let isFound = false;
    if (accounts.length === 0) isFound = false;

    for (let i = 0; i < accounts.length; i++) {
      if (
        accounts[i].attributes.email === email &&
        accounts[i].attributes.password === password
      ) {
        setIsLoggedIn(true);
        setCurrentLogin(accounts[i]);
        isFound = true;
        break;
      }
    }

    if (!isFound) alert("Account not found!");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    setCurrentLogin({});
  };

  const deposit = (amount, activity) => {
    const newBalance = currentLogin.attributes.balance + parseInt(amount);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          balance: newBalance,
          transaction: [activity, ...currentLogin.attributes.transaction],
        },
      }),
    };

    fetch(
      `http://localhost:1337/api/accounts/${currentLogin.id}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentLogin(data.data);
        setTriggerFetched((prevState) => !prevState);
      });
  };

  const withdrawal = (amount, activity) => {
    const newBalance = currentLogin.attributes.balance - parseInt(amount);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          balance: newBalance,
          transaction: [activity, ...currentLogin.attributes.transaction],
        },
      }),
    };

    fetch(
      `http://localhost:1337/api/accounts/${currentLogin.id}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        setCurrentLogin(data.data);
        setTriggerFetched((prevState) => !prevState);
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

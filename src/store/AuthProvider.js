import { useState } from "react";
import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signupHandler = (email, password) => {
    setAccounts((prevState) => [
      ...prevState,
      { email: email, password: password },
    ]);
  };

  const loginHandler = (email, password) => {
    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].email === email && accounts[i].password === password) {
        setIsLoggedIn(true);
        break;
      }
      alert("Account not found!");
    }
  };

  const authContext = {
    users: accounts,
    isLoggedIn: isLoggedIn,
    onLogout: () => {},
    onLogin: loginHandler,
    onSignup: signupHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

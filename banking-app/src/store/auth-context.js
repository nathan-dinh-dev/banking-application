import React from "react";

const AuthContext = React.createContext({
  users: [],
  isLoggedIn: false,
  currentLogin: {},
  onLogout: () => {},
  onLogin: (email, password) => {},
  onSignup: (firstName, lastName, email, password) => {},
  onDeposit: (amount, activity) => {},
  onWithdrawal: (amount, activity) => {},
});

export default AuthContext;

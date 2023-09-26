import React from "react";

const AuthContext = React.createContext({
  users: [],
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
  onSignup: (email, password) => {},
});

export default AuthContext;

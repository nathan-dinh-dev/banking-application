import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MyAccount from "./pages/MyAccount";
import AllAccounts from "./pages/AllAccounts";
import "./App.css";
import AuthProvider from "./store/AuthProvider";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/allaccounts" element={<AllAccounts />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;

import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  //Make it true to enable link to all data accounts
  const isAdmin = true;

  return (
    <header className={styles.header}>
      <h1>Banking Application</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/myaccount"
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          My account
        </NavLink>
        <a href="">Credit cards</a>
        <a href="">Home loans</a>
        <a href="">Auto</a>
        <a href="">Education & goals</a>
        {isAdmin && (
          <NavLink
            to="/allaccounts"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            All Accounts
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;

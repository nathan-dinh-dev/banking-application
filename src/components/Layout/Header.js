import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Banking Application</h1>
      <nav className={styles.nav}>
        <a href="">Checking</a>
        <a href="">Savings & CDs</a>
        <a href="">Credit cards</a>
        <a href="">Home loans</a>
        <a href="">Auto</a>
        <a href="">Education & goals</a>
      </nav>
    </header>
  );
};

export default Header;

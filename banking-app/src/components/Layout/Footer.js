import styles from "./Footer.module.css";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <SocialMedia />
    </footer>
  );
};

export default Footer;

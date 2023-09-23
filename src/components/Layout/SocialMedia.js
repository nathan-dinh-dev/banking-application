import styles from "./SocialMedia.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialMedia = () => {
  return (
    <div className={styles["social-container"]}>
      <h3>FOLLOW US ON SOCIAL MEDIA</h3>
      <div className={styles["link-container"]}>
        <a
          href="https://www.youtube.com"
          className={`${styles.youtube} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>
        <a
          href="https://www.facebook.com"
          className={`${styles.facebook} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          className={`${styles.twitter} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          className={`${styles.instagram} ${styles.social}`}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;

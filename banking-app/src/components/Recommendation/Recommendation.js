import styles from "./Recommendation.module.css";

const Recommendation = () => {
  return (
    <div className={styles.recommend}>
      <h1>Choose what's right for you</h1>
      <div className={styles.cards}>
        <div className={styles["card-container"]}>
          <div class="card">
            <h5 class="card-header">Business Complete Checking</h5>
            <div class="card-body">
              <h5 class="card-title">
                $300 for new business checking customers
              </h5>
              <p class="card-text">
                Limited-time offer: Get $300 when you open a Business Checking
                Account. <i>Qualifying activities apply.</i>
              </p>
              <a href="#" class="btn btn-primary">
                Open Account
              </a>
            </div>
          </div>
        </div>
        <div className={styles["card-container"]}>
          <div class="card">
            <h5 class="card-header">Freedom Unlimited</h5>
            <div class="card-body">
              <h5 class="card-title">
                Earn a $200 bonus + unlimited 1.5% cash back and more
              </h5>
              <p class="card-text">
                Earn 5% cash back on travel purchased, and 3% cash back on
                dining & drugstores <b>- all with no annual fee.</b>
              </p>
              <a href="#" class="btn btn-primary">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className={styles["card-container"]}>
          <div class="card">
            <h5 class="card-header">Secure Banking</h5>
            <div class="card-body">
              <h5 class="card-title">Enjoy $100 on us</h5>
              <p class="card-text">
                For new checking customers when you open an account with
                qualifying activities.
              </p>
              <a href="#" class="btn btn-primary">
                Open an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;

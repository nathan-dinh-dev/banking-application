import styles from "./MyAccount.module.css";
import Card from "../components/UI/Card";
import AuthContext from "../store/auth-context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../assets";
import ConfirmModal from "../components/ConfirmModal/ConfirmModal";

const MyAccount = () => {
  const ctx = useContext(AuthContext);
  const currentAccount = ctx.currentLogin;
  const [option, setOption] = useState("Deposit");
  const [amount, setAmount] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const optionsHandler = (event) => {
    setOption(event.target.value);
  };

  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const logoutHandler = () => {
    ctx.onLogout();
  };

  const closeModalHandler = () => {
    setIsOpenModal(false);
    setAmount(0);
  };

  const approveHandler = () => {
    const today = new Date();
    console.log(today);
    if (option === "Deposit") {
      ctx.onDeposit(
        amount,
        `Deposit $${amount} successfully on ${today.toLocaleDateString()} ${today.toLocaleTimeString()}`
      );
    } else if (option === "Withdrawal") {
      if (currentAccount.attributes.balance >= amount) {
        ctx.onWithdrawal(
          amount,
          `Withdrawal $${amount} successfully on ${today.toLocaleDateString()} ${today.toLocaleTimeString()}`
        );
      } else alert("Sorry, you don't have enough fund to make this operation!");
    }
    setIsOpenModal(false);
    setAmount(0);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsOpenModal(true);
  };

  const transactionContent = () => {
    let transactionArr = [...currentAccount.attributes.transaction];
    if (JSON.stringify(currentAccount) !== "{}") {
      if (transactionArr.length === 0) return <h6>No transaction found.</h6>;
      else {
        return (
          <ul className={styles.list}>
            {transactionArr.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        );
      }
    } else return "";
  };

  const accountContent = (
    <>
      {isOpenModal && (
        <ConfirmModal
          onCloseModal={closeModalHandler}
          onApprove={approveHandler}
          amount={amount}
          option={option}
        />
      )}
      {JSON.stringify(currentAccount) !== "{}" ? (
        <main className={styles["flex-wrap"]}>
          <Card className={styles.container}>
            <form onSubmit={submitHandler}>
              <div className={styles.welcome}>
                <h1>Hi {currentAccount.attributes.firstName}</h1>
                <h2>Available balance: ${currentAccount.attributes.balance}</h2>
                <button type="button" onClick={logoutHandler}>
                  <img src={logout} alt="Log out gif" id={styles.logout} />
                </button>
              </div>
              <div className={styles.options}>
                <label for="options">
                  Would you like to <b>deposit</b> or <b>withdrawal</b> money?
                </label>
                <select name="options" id="options" onChange={optionsHandler}>
                  <option value="Deposit" selected>
                    Deposit
                  </option>
                  <option value="Withdrawal">Withdrawal</option>
                </select>
              </div>
              <div className={styles.amount}>
                <label for="amount">Amount: </label>
                <input
                  id="amount"
                  type="number"
                  onChange={amountHandler}
                  min="0"
                  max="5000"
                  value={amount}
                  require
                />
              </div>
              <div className={styles.actions}>
                <button className={option === "Deposit" ? styles.deposit : ""}>
                  {option}
                </button>
              </div>
            </form>
          </Card>
          <Card className={styles["transaction-container"]}>
            <div className={styles.transaction}>
              <h3>Transaction History</h3>
            </div>
            <div>{transactionContent()}</div>
          </Card>
        </main>
      ) : (
        ""
      )}
    </>
  );

  const notLoginContent = (
    <main className={styles["flex-wrap"]}>
      <h1>
        Please <Link to="/">Login</Link> to your account to see your account
      </h1>
    </main>
  );

  return <>{ctx.isLoggedIn ? accountContent : notLoginContent};</>;
};

export default MyAccount;

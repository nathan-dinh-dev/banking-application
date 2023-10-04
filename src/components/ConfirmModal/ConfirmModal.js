import Modal from "../UI/Modal";
import Card from "../UI/Card";
import styles from "./ConfirmModal.module.css";

const ConfirmModal = (props) => {
  let textAction = "";
  if (props.option === "Deposit")
    textAction = `Action: ${props.option} $${props.amount} to account`;
  else if (props.option === "Withdrawal")
    textAction = `Action: ${props.option} $${props.amount} from account`;

  return (
    <Modal onClick={props.onCloseModal}>
      <header>
        <button onClick={props.onCloseModal}>X</button>
        <h2>Are you sure?</h2>
      </header>
      <div className={styles.content}>
        <h5>{textAction}</h5>
        <p>
          <i>Note: This action cannot be undone</i>
        </p>
      </div>
      <footer className={styles.actions}>
        <button onClick={props.onCloseModal}>Cancel</button>
        <button onClick={props.onApprove}>Approve</button>
      </footer>
    </Modal>
  );
};

export default ConfirmModal;

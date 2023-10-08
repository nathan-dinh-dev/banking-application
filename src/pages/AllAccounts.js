import styles from "./AllAccounts.module.css";
import AuthContext from "../store/auth-context";
import { useContext } from "react";

const AllAccounts = () => {
  const ctx = useContext(AuthContext);
  const users = ctx.users;

  return (
    <main className={styles["flex-wrap"]}>
      <h4>Table of All Users' Accounts</h4>
      <table className={styles["styled-table"]}>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Account Type</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { attributes } = user;
            return (
              <tr key={user}>
                <td>{`${attributes.firstName} ${attributes.lastName}`}</td>
                <td>Checking</td>
                <td>{attributes.email}</td>
                <td>{attributes.password}</td>
                <td>{`$${attributes.balance}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default AllAccounts;

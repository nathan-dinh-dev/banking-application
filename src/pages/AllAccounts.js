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
            return (
              <tr key={user}>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>Checking</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{`$${user.money}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};

export default AllAccounts;

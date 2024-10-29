import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }, index) => (
        <tr key={id} className={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default TransactionHistory;
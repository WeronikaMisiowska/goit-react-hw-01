import React from "react";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={styles.friendItem}>
    <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
    <div className={styles.textContainer}>
      <p className={styles.name}>{name}</p>
      <span className={isOnline ? styles.online : styles.offline}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  </div>
);

export default FriendListItem;

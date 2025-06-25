import React from "react";
import { FaUsersLine } from "react-icons/fa6";
import style from "../../../styles/user-card.module.css";

const UserCard = () => {
  return (
    <>
      <div>
        <div className={style.usersIcon}>
          <FaUsersLine size={30} color="blue" />
          <h3>USERS</h3>
          <h1>2,453</h1>
        </div>
      </div>
    </>
  );
};

export default UserCard;

import React from "react";
import Rate from "../../rate";

import style from "../../../styles/general-details.module.css";
//

import { FaCircleUser } from "react-icons/fa6";
const UserGeneralDetails = () => {
  return (
    <>
      <div className={style.nameContainer}>
        <div className={style.userdetailBox}>
          <div className={style.nameIcon}>
            <FaCircleUser size={80} />
            <h5>GRACE EFFIOM</h5>
          </div>
          <div>
            <p>User's Tier</p>
            <Rate />
          </div>
          <div>
            <h5>200,000.00</h5>
            <p>1234567890/NEWMAN BANK</p>
          </div>
        </div>

        <div className={style.labelBox}>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>

      <div className={style.personalInfoContainer}>
        <div className={style.header}>
          <h3>Personal Information</h3>
        </div>

        <div>
          
        </div>
      </div>
    </>
  );
};

export default UserGeneralDetails;

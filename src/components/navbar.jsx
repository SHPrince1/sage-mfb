import React from "react";
import Logo from "../assets/lensqr-logo.svg";
import style from "../styles/navbar.module.css";

const NavBar = () => {
  return (
    <div>
      <nav
        className={style.container}
        style={{ padding: "4px", background: "#fff", color: "#fff" }}
      >
        <div className={style.logoInput}>
          <div>
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div>
            <input placeholder="Searchfor anything" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

import React from "react";
import Logo from '../assets/lensqr-logo.svg'
import style from '../styles/navbar.module.css'

const NavBar = () => {
  return (
    <div>
      <nav style={{ padding: "4px", background: "#333", color: "#fff" }}>
        <div className={style.logoInput}>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <input />
            </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

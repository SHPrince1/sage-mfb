import React from "react";
import { useNavigate  } from 'react-router-dom';

import style from "../styles/login.module.css";

// imported image
import Logo from "../assets/lensqr-logo.svg";
import Pablo from "../assets/pablo-sign-in 1.svg";

const Login = () => {
     const navigate = useNavigate();
  return (
    <>
      <div className={style.containerBox}>
        <div className={style.logoBox}>
          <img src={Logo} alt="" />
        </div>

        <div className={style.loginBox}>
          <div className={style.imageBox}>
            <img src={Pablo} alt="" />
          </div>

          <div className={style.loginDetailsBox}>
            <div className={style.welcomeBox}>
              <h1>Welcome!</h1>
              <p>Enter details to login.</p>
            </div>

            <div className={style.inputBox}>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <a href="/login-dashboard">FORGOT PASSWORD?</a>
              {/* <Link to="/login-dashboard" className={style.submitButton}> */}
                <button type="submit" className={style.submitButton}   onClick={() => navigate('/login-dashboard')}>
                  Login
                </button>
             {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

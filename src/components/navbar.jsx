import React from "react";
import Logo from "../assets/lensqr-logo.svg";
import style from "../styles/navbar.module.css";
// imported Images
import ProfileImage from "../assets/profile-image.png";
// React Icons
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
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
              <img src={Logo} alt="" width={100} />
            </a>
          </div>
          <div className={style.inputSearchDiv}>
            <input placeholder="Searchfor anything" />

            
              <button  className={style.SearchDiv}>
                <FaSearch color="#fff" />
              </button>
          
          </div>
        </div>

        <div className={style.profileImage}>
          <div>
            <IoIosNotificationsOutline size={25} />
          </div>

          <div className={style.proImageName}>
            <img src={ProfileImage} alt="" />
            {/* <p>Image</p> */}
            <p>Adedeji</p>
            <MdArrowDropDown />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

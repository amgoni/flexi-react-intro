import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.scss";
import { Links } from "../Data";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleHandler = () => setToggleMenu((prev) => !prev);

  return (
    <nav id="navbar">
      <div className="navbar__desktop">
        <img src="../assets/logo.svg" alt="company logo" />
        <ul>
          {Links.map((link) => (
            <li>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar__mobile">
        <a href="#">
          <img src="../assets/logo.svg" alt="company logo" />
        </a>
        {toggleMenu ? (
          <RiCloseLine color="34194c" size={30} onClick={toggleHandler} />
        ) : (
          <RiMenu3Line color="34194c" size={30} onClick={toggleHandler} />
        )}
        {toggleMenu && (
          <div className="navbar__mobile-container">
            <ul>
              {Links.map((link) => (
                <li>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

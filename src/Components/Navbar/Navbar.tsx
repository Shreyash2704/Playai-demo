import React from "react";
import Styles from './Navbar.module.css'
import { NavLink } from 'react-router-dom';
import './Navbar2.css'

type Props = {
  type:String
};

const Navbar = (props: Props) => {
  return (
    <div className={ `${Styles.nav_root} ${props.type === "light" ? Styles.light : ""}` }>
        <div className={Styles.nav_bar}>
          <div className={Styles.menu}>
              <div className={Styles.menuline}></div>
              <div className={Styles.menuline}></div>
              <div className={Styles.menuline}></div>
            </div>
            <a href="/" className={Styles.title}>
              <p className={Styles.chakra_text}>
                <span>play</span>
                <span>collective</span>
              </p>
            </a>
            <div className={Styles.tabs}>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                Home
              </NavLink>
                <NavLink to="/ranks" className={({ isActive }) => isActive ? "active" : ""}>
                Ranks
              </NavLink>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
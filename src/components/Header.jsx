import styles from "./Header.module.css";

import tuiuiuLogo from "../images/tuiuiu-logo.png";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={tuiuiuLogo} alt="Tuiuiu Logo" />
    </div>
  )
};
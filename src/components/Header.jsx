import styles from "./Header.module.css";

import igniteLogo from "../images/ignite-logo.png";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
      <span>Ignite Feed</span>
    </div>
  )
};
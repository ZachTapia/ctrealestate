import React from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link className={styles.nav__logo} to="/">
        Christine Tapia
      </Link>
      <Link className={styles.nav__link} id={styles.contact} to="/contact">
        Contact
      </Link>
      <Link className={styles.nav__link} to="/properties">
        Properties
      </Link>
    </div>
  )
}

export default Nav

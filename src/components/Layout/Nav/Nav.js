import React from "react"
import { Link } from "gatsby"
import styles from "./Nav.module.scss"

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__logo}>Christine Tapia Real Estate</div>
      <Link className={styles.nav__link} id={styles.contact} to="/">
        Contact
      </Link>
      <Link className={styles.nav__link} to="/">
        Properties
      </Link>
    </div>
  )
}

export default Nav

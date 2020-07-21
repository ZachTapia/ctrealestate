import React from "react"
import styles from "./Footer.module.scss"
import Info from "./Info/Info"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Info />
      Created by Zach Tapia
    </div>
  )
}

export default Footer

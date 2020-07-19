import React from "react"
import styles from "./ContactHeader.module.scss"

const ContactHeader = () => {
  return (
    <>
      <div className={styles.contact__header}>Contact Me</div>
      <div className={styles.contact__header__description}>
        Let's get in contact!
      </div>
    </>
  )
}

export default ContactHeader

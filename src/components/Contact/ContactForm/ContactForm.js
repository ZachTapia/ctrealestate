import React from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = () => {
  return (
    <form className={styles.contactForm} name="contact" netlify>
      <label>
        Name <input type="text" name="name" />
      </label>
      <label>
        Email <input type="email" name="email" />
      </label>
      <label>
        Phone Number <input type="tel" name="phone" />
      </label>
      <button className={styles.contactButton} type="submit">
        Send
      </button>
    </form>
  )
}

export default ContactForm

import React from "react"
import styles from "./PropertiesHeader.module.scss"

const PropertiesHeader = () => {
  return (
    <>
      <div className={styles.properties__header}>Properties</div>
      <div className={styles.properties__header__description}>
        Here are some properties I am currently listing or have sold.
      </div>
    </>
  )
}

export default PropertiesHeader

import React from "react"
import styles from "./Property.module.scss"
import Img from "gatsby-image"

const Property = ({ address, sold, dateSold, price, image }) => {
  return (
    <div className={styles.property}>
      <Img className={styles.property__image} fluid={image.fluid} />
      <div className={styles.property__address}>{address}</div>
      <div className={styles.property__dateSold}>{dateSold}</div>
      <div className={styles.property__price}>{price}</div>
      {sold ? <div className={styles.property__sold}>SOLD</div> : null}
    </div>
  )
}

export default Property

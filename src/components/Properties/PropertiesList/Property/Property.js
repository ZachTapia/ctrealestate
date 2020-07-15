import React from "react"
import styles from "./Property.module.scss"
import Img from "gatsby-image"

const Property = ({ address, city, bedBath, sold, price, image }) => {
  return (
    <div className={styles.property}>
      <Img className={styles.property__image} fluid={image.fluid} />
      <div className={styles.property__address}>
        <div className={styles.property__street}>{address}</div>
        <div className={styles.property__city}>{city}</div>
      </div>
      <div className={styles.property__bedBath}>{bedBath}</div>

      <div className={styles.property__price}>{price}</div>
      {sold ? <div className={styles.property__sold}>SOLD</div> : null}
    </div>
  )
}

export default Property

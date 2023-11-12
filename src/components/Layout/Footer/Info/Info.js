import React from "react"
import styles from "./Info.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Info = () => {
  const image = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.info}>
      <Img
        className={styles.info__logo}
        fluid={image.logoImage.childImageSharp.fluid}
      />
      <div className={styles.info__flex}>
        <div className={styles.info__address}>
          Legends Realty
          <br />
          15073 Imperial Hwy <br />
          La Mirada, CA 90638 <br />
        </div>

        <div className={styles.info__contact}>
          (562) 762-0053
          <br />
          christine67tapia@aol.com
          <br />
          CaBRE# 01478688
          <br />
        </div>
      </div>
    </div>
  )
}

export default Info

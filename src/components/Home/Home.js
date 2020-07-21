import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./Home.module.scss"
import About from "./About/About"
import Testimonials from "./Testimonials/Testimonials"

const Home = () => {
  const images = useStaticQuery(graphql`
    query {
      houseImage: file(relativePath: { eq: "images/house.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={styles.home}>
      <div className={styles.home__title}>"Let me find your dream home"</div>

      <div className={styles.home__intro}>
        <div className={styles.image__wrapper}>
          <Img
            className={styles.home__intro__image}
            fluid={images.houseImage.childImageSharp.fluid}
          />
        </div>
      </div>

      <About />

      <Testimonials />
    </div>
  )
}

export default Home

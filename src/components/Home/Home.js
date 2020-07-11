import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./Home.module.scss"
import Testimonials from "./Testimonials/Testimonials"

const Home = () => {
  const images = useStaticQuery(graphql`
    query {
      interiorImage: file(relativePath: { eq: "images/home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      christineImage: file(relativePath: { eq: "images/christine2.jpg" }) {
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
            fluid={images.interiorImage.childImageSharp.fluid}
          />
        </div>

        <div className={styles.home__intro__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>

      <div className={styles.home__about}>
        <div className={styles.home__about__wrapper}>
          <Img
            className={styles.home__about__image}
            fluid={images.christineImage.childImageSharp.fluid}
          />

          <div className={styles.home__about__text}>
            <div className={styles.home__about__title}>About Christine</div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <Testimonials />
    </div>
  )
}

export default Home

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import styles from "./About.module.scss"

const About = () => {
  const image = useStaticQuery(graphql`
    query {
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
    <div className={styles.about}>
      <div className={styles.about__title}>Christine Tapia</div>

      <div className={styles.about__flex}>
        <Img
          className={styles.about__image}
          fluid={image.christineImage.childImageSharp.fluid}
        />

        <div className={styles.about__text}>
          <div className={styles.about__aboutMe}>About Me</div>
          I've worked as a realtor for over twenty years and have experience
          assisting buyers, sellers, and investors find their dream homes. When
          helping my clients no distance is too far; I have listed and sold
          homes in Los Angeles, Orange, Riverside, and San Bernardino Counties.
          Because of my expertise in the business I am able to work with
          sellers, providing flexible commission splits. My role as a notary
          public aids in all of my clients' documentation needs. Finding your
          perfect home is my passion; no matter if you are a new or seasoned
          home buyer or seller, it would be my privilege to help you through
          this process. Check out my many positive client testimonials below and
          when you are ready call me day or night. Let's begin your buying or
          selling journey!
        </div>
      </div>
    </div>
  )
}

export default About

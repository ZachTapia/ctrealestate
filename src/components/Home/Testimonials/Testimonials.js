import React from "react"
import styles from "./Testimonials.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Testimonials = () => {
  const indicatorStyles = {
    background: "#888",
    width: "3vw",
    height: "3vw",
    maxWidth: "40px",
    maxHeight: "40px",
    display: "inline-block",
    margin: "0 12px",
  }

  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials__title}>Happy Clients</div>
      <div className={styles.testimonials__wrapper}>
        <Carousel
          showStatus={false}
          renderIndicator={(onClickHandler, isSelected) => {
            if (isSelected) {
              return <li style={{ ...indicatorStyles, background: "#000" }} />
            }
            return <li style={indicatorStyles} onClick={onClickHandler} />
          }}
        >
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card__quote}>
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </div>
            <div className={styles.testimonials__card__author}>
              - Buster Tapia
            </div>
          </div>
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card__quote}>
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </div>
            <div className={styles.testimonials__card__author}>
              - Buster Tapia
            </div>
          </div>
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card__quote}>
              " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. "
            </div>
            <div className={styles.testimonials__card__author}>
              - Buster Tapia
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials

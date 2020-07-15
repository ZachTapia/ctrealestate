import React from "react"
import styles from "./Testimonials.module.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const Testimonials = () => {
  const indicatorStyles = {
    background: "#888",
    width: "3vw",
    height: "3vw",
    maxWidth: "25px",
    maxHeight: "25px",
    display: "inline-block",
    margin: "0 12px",
  }

  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonials__title}>Happy Clients</div>
      <div className={styles.testimonials__wrapper}>
        <Carousel
          autoPlay={true}
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
              " Working with Christine was easy. We accepted an offer within 1
              week of listing our home. She always answers calls and emails
              promptLy. Her knowledge the area really helped in us determining
              our asking price. Would highly recommend her for your realtor
              needs. "
            </div>
            <div className={styles.testimonials__card__author}>
              - Mark & Debbie Sanchez
            </div>
          </div>
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card__quote}>
              " Christine did an incredible job both listing and selling our old
              home and finding and guiding me and my wife on the purchase of our
              new home. This was particularly impressive as the timing of the
              market was key to ensuring I sold my old home for top dollar. She
              guided the staging and listing of our old home to ensure a top
              selling price, while negotiating with the seller of our new home
              all under an extreme time constraint to ensure wouldn't lose the
              bid on our dream home. Christine worked a miracle! If she did it
              for us, she can do it for you. Awesome job Christine!! "
            </div>
            <div className={styles.testimonials__card__author}>
              - Xavier Sanchez
            </div>
          </div>
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card__quote}>
              " This is our 3rd property with Christine. We own in L.A. County,
              San Bernardino County and Riverside County and Christine has
              proven to know the market in all areas, we even used Christine to
              find tenants for our rental and it took less than a week.
              Christine is a great communicator and negotiator, we Highly
              recommend Christine and will use her again on our next property. "
            </div>
            <div className={styles.testimonials__card__author}>
              - Ronnie Delgado
            </div>
          </div>
          <div className={styles.testimonials__card}>
            <div className={styles.testimonials__card__quote}>
              " Christine was very professional and helpful. Great personality,
              trustworthy, on time for meetings and getting paperwork done. She
              knew exactly what we needed and wanted. We were very happy from
              start to finish. "
            </div>
            <div className={styles.testimonials__card__author}>
              - Lisa Anne Taormina
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials

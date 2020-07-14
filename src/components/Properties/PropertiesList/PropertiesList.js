import React from "react"
import styles from "./PropertiesList.module.scss"
import Property from "./Property/Property"
import { graphql, useStaticQuery } from "gatsby"

const PropertiesList = () => {
  const allImages = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `)

  const allProperties = [
    {
      address: "1 Easy St.",
      image: "house1.jpg",
      sold: true,
      dateSold: "March 15, 2020",
      price: "$1,000,000",
    },
    {
      address: "12 Easy St.",
      image: "house2.jpg",
      sold: true,
      dateSold: "March 15, 2020",
      price: "$1,000,000",
    },
    {
      address: "123 Easy St.",
      image: "house3.jpg",
      sold: true,
      dateSold: "March 15, 2020",
      price: "$1,000,000",
    },
    {
      address: "1234 Easy St.",
      image: "house4.jpg",
      sold: true,
      dateSold: "March 15, 2020",
      price: "$1,000,000",
    },
  ]

  const renderList = () => {
    return allProperties.map(property => {
      // Get fluid image
      const imageFluid = allImages.allImageSharp.nodes.find(node => {
        if (node.fluid.originalName == property.image) {
          return node.fluid
        }
      })

      return (
        <Property
          key={property.address}
          address={property.address}
          sold={property.sold}
          dateSold={property.dateSold}
          price={property.price}
          image={imageFluid}
        />
      )
    })
  }

  return (
    <div className={styles.propertiesList}>
      <h1>Test</h1>
      {renderList()}
    </div>
  )
}

export default PropertiesList

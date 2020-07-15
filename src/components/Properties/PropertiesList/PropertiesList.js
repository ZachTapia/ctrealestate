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
      address: "15238 Tricia Ln.",
      city: "La Mirada",
      image: "TriciaLn.png",
      sold: true,
      price: "$525,000",
      bedBath: "4 Bed / 2 Bath",
    },
    {
      address: "11941 Groveside Ave.",
      city: "Whittier",
      image: "GrovesideAve.png",
      sold: true,
      price: "$620,000",
      bedBath: "3 Bed / 2 Bath",
    },
    {
      address: "5310 E Big Sky Ln.",
      city: "Anaheim Hills",
      image: "BigSkyLn.png",
      sold: true,
      price: "$845,000",
      bedBath: "4 Bed / 2 Bath",
    },
    {
      address: "11665 Faculty Dr.",
      city: "Norwalk",
      image: "FacultyDr.png",
      sold: true,
      price: "$575,000",
      bedBath: "3 Bed / 1 Bath",
    },
    {
      address: "15 Villa Milano",
      city: "Lake Elsinore",
      image: "VillaMilano.png",
      sold: true,
      price: "$405,000",
      bedBath: "4 Bed / 2 Bath",
    },
    {
      address: "12041 Parise Dr.",
      city: "Whittier",
      image: "PariseDr.png",
      sold: true,
      price: "$453,000",
      bedBath: "3 Bed / 2 Bath",
    },
    {
      address: "1861 San Jose Ave.",
      city: "La Habra",
      image: "SanJoseAve.png",
      sold: true,
      price: "$665,000",
      bedBath: "3 Bed / 2 Bath",
    },
    {
      address: "93 Carriage Way #147",
      city: "Pomona",
      image: "CarriageWay.png",
      sold: true,
      price: "$305,000",
      bedBath: "2 Bed / 2 Bath",
    },
    {
      address: "9588 Mountain Pine Ct.",
      city: "Phelan",
      image: "MountainPineCt.png",
      sold: true,
      price: "$265,000",
      bedBath: "3 Bed / 2 Bath",
    },
    {
      address: "10251 Belcher St.",
      city: "Downey",
      image: "BelcherSt.png",
      sold: true,
      price: "$400,000",
      bedBath: "4 Bed / 2 Bath",
    },
    {
      address: "1215 N San Gabriel Ave. #309",
      city: "Azusa",
      image: "SanGabrielAve.png",
      sold: true,
      price: "$330,000",
      bedBath: "3 Bed / 3 Bath",
    },
    {
      address: "4118 Warrington Ave.",
      city: "Pico Rivera",
      image: "WarringtonAve.png",
      sold: true,
      price: "$420,000",
      bedBath: "3 Bed / 3 Bath",
    },
    {
      address: "21210 E Arrow Hwy. #151",
      city: "Covina",
      image: "ArrowHwy.png",
      sold: true,
      price: "$50,000",
      bedBath: "2 Bed / 1 Bath",
    },
    {
      address: "1 Calavera Rd.",
      city: "Pinon Hills",
      image: "CalaveraRd.png",
      sold: true,
      price: "$15,000",
      bedBath: "2.4 Acres",
    },
    {
      address: "17376 Woodentree Ln.",
      city: "Riverside",
      image: "WoodenTreeLn.png",
      sold: true,
      price: "$440,000",
      bedBath: "4 Bed / 3 Bath",
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
          city={property.city}
          bedBath={property.bedBath}
          sold={property.sold}
          dateSold={property.dateSold}
          price={property.price}
          image={imageFluid}
        />
      )
    })
  }

  return <div className={styles.propertiesList}>{renderList()}</div>
}

export default PropertiesList

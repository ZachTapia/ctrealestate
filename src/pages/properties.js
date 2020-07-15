import React from "react"
import Layout from "../components/Layout/Layout"
import PropertiesHeader from "../components/Properties/PropertiesHeader/PropertiesHeader"
import PropertiesList from "../components/Properties/PropertiesList/PropertiesList"
const Properties = () => {
  return (
    <Layout>
      <PropertiesHeader />
      <PropertiesList />
    </Layout>
  )
}

export default Properties

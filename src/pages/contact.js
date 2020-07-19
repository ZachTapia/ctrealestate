import React from "react"
import Layout from "../components/Layout/Layout"
import ContactHeader from "../components/Contact/ContactHeader/ContactHeader"
import ContactForm from "../components/Contact/ContactForm/ContactForm"

const contact = () => {
  return (
    <Layout>
      <ContactHeader />
      <ContactForm />
    </Layout>
  )
}

export default contact

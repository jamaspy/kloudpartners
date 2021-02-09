import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {
  About,
  Contact,
  Landing,
  Specialism,
  Testimonials,
} from "../components/Sections"
export default () => {
  return (
    <Layout>
      <SEO title="Kloud Partners" />
      <Landing />
      <About />
      <Specialism />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

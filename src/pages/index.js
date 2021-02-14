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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
export default () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }
  return (
    <Layout>
      <SEO
        title="Kloud Partners"
        description="Software Sales Recruitment Company Based In Sydney"
      />
      <Landing />
      <About />
      <Specialism />
      <Testimonials />
      <Contact />
    </Layout>
  )
}

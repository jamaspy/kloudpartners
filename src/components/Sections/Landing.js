import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../HeroHeader/StyledHero"
import Img from "gatsby-image"
import { gsap } from "gsap"

const Landing = () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(name: { eq: "hero" }) {
        name
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90, webpQuality: 90) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      logo: file(name: { eq: "kp_logo" }) {
        name
        childImageSharp {
          fluid(maxWidth: 2000, quality: 100, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  useEffect(() => {
    gsap.to(".image", {
      visibility: "visible",
      delay: 0.2,
      duration: 3,
      ease: "power-3",
      y: -60,
      scale: 1.1,
    })
  }, [])
  return (
    <div className="h-screen">
      <Hero img={data.hero.childImageSharp.fluid} home={true}>
        <div className="flex items-center justify-center h-full w-full">
          <div className="invisible image max-w-lg m-auto w-full p-8">
            <Img fluid={data.logo.childImageSharp.fluid} />
          </div>
        </div>
      </Hero>
    </div>
  )
}
export default Landing

import React, { useEffect } from "react"
import SVG from "../../images/middle.svg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const About = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: ".specsvg",
      start: "center bottom",
    })
    tl.from(".divBoxSpec", { x: -400, opacity: 0, duration: 1.5 })
    tl.from(".spectitle", { x: 200, opacity: 0, duration: 1.5 }, "-=1")
      .from(
        ".specsvg",
        { x: 300, opacity: 0, duration: 1.5, scale: 0.2 },
        "-=1"
      )
      .from(
        ".speccontent",
        {
          y: 300,
          opacity: 0,
          duration: 2,
        },
        "-=1"
      )
  }, [])
  return (
    <div className="flex flex-col 2xl:flex-row-reverse w-full">
      <div className="2xl:w-1/2 flex justify-center my-auto">
        <img className="specsvg" src={SVG} alt="svg" />
      </div>
      <div className="divBoxSpec 2xl:w-1/2 flex flex-col justify-evenly bg-gradient-to-t from-mainBlue to-darkBlue p-8">
        <div className="spectitle mb-8">
          <p className="font-black text-4xl xl:text-6xl 2xl:text-8xl text-white leading-loose">
            top performing talent tailored to your needs
          </p>
        </div>

        <div>
          <p className="speccontent font-light text-xl md:text-2xl text-white xl:text-4xl leading-loose">
            Our process is straightforward, and we set measurable goals. Within
            seven days, we aim to bring our clients between three and five
            candidates. We average a fill rate of 27 days, which means that in
            less than a month, you and your next team player could be working
            together and planning out your next moves. Through this process, we
            empower software companies to scale rapidly, accessing the talent
            necessary to continue to move forward.
          </p>

          <p className="speccontent font-light text-xl md:text-2xl text-white xl:text-4xl leading-loose mt-8">
            Kloud Partners is here to foster a stronger, more resilient tech
            sector in the APAC region by building bridges. We are confident that
            one placement at a time, we can forge new pathways. Talent is our
            business, recruitment is our method, and every step of the way, we
            are looking out for you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

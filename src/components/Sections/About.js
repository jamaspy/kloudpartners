import React, { useEffect } from "react"
import SVG from "../../images/top.svg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const About = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: ".aboutsvg",
      start: "center bottom",
    })
    tl.from(".divBox", { x: 400, opacity: 0, duration: 1.5 })
    tl.from(".abouttitle", { x: 200, opacity: 0, duration: 1.5 }, "-=1")
      .from(
        ".aboutsvg",
        { x: -200, opacity: 0, duration: 1.5, scale: 0.8 },
        "-=1"
      )
      .from(
        ".aboutcontent",
        {
          y: 300,
          opacity: 0,
          duration: 1.9,
        },
        "-=1"
      )
  }, [])

  return (
    <div className="flex flex-col 2xl:flex-row w-full">
      <div className="2xl:w-1/2 flex justify-center  my-auto">
        <img
          className="aboutsvg"
          src={SVG}
          alt="svg"
          style={{ maxHeight: 650 }}
        />
      </div>
      <div className="divBoxAbout 2xl:w-1/2 flex flex-col justify-evenly bg-gradient-to-t from-darkBlue to-mainBlue p-8">
        <div className="abouttitle mb-8">
          <p className="font-black text-4xl xl:text-6xl 2xl:text-8xl text-white leading-loose">
            help growing software companies scale quickly
          </p>
        </div>

        <div>
          <p className="aboutcontent text-xl font-light md:text-2xl xl:text-3xl leading-relaxed text-white ">
            Above all else, we at Kloud Partners want to see our clients grow.
            We believe that there is untold potential in the tech sector across
            the APAC region, and to support that potential, we are constantly
            seeking out up-and-coming as well as proven talent, connecting them
            with the organisations with which they will thrive.
          </p>
          <p className="aboutcontent text-xl font-light md:text-2xl xl:text-3xl leading-relaxed text-white mt-4 ">
            This is our one and only focus: development. To us, that comes down
            to people. We make ourselves familiar with the top 1% of all talent
            in the APAC region because we know that is the talent bound to make
            a difference. When our clients put their trust in us, letting us
            find the next addition to their team, we take that seriously. We
            dedicate our resources to meeting and exceeding their expectations,
            abiding by the five-part work philosophy: work hard, be honest, be
            respectful, deliver on promises, and have fun.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

import React, { useEffect } from "react"
import SVG from "../../images/bottom.svg"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Testimonials = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: ".testsvg",
      start: "center bottom",
    })
    tl.from(".testtitle", { x: 200, opacity: 0, duration: 1.5 })
      .from(
        ".testsvg",
        { x: -300, y: -200, opacity: 0, duration: 1.5, scale: 0.8 },
        "-=1"
      )
      .from(
        ".testcontent",
        {
          y: 300,
          opacity: 0,
          duration: 1.9,
        },
        "-=1"
      )
  }, [])
  return (
    <div className="min-h-screen xl:h-screen flex flex-col xl:flex-row w-full">
      <div id="left" className="w-full h-full flex justify-center p-8">
        <img className="testsvg" src={SVG} alt="svg" />
      </div>
      <div
        id="right"
        className="w-full h-full flex flex-col justify-evenly bg-gradient-to-t from-darkBlue to-mainBlue p-8"
      >
        <div className="testtitle mb-8">
          <p
            className="font-black text-4xl md:text-8xl xl:text-9xl text-white leading-loose	"
            style={{ lineHeight: 1.2 }}
          >
            trusted by global industry leaders
          </p>
        </div>

        <div className='h-full flex justify-evenly flex-col'>
        <div>
          <p className="testcontent font-light text-xl md:text-2xl xl:text-4xl text-white ">
            <span className="font-black">"</span>Terry possesses a sound
            knowledge of the SaaS and AdTech space and works with a wide network
            of well-qualified individuals across a range of job disciplines.
            What I value the most is that he carefully listens to the job
            requirement and does a thorough screening before putting forth any
            candidate. What made the entire experience even better was the time
            in which he was able to deliver. Having a partnership with Terry has
            significantly improved our time-to-hire on strategic roles over the
            past six months. Terry is knowledgeable, articulate and highly
            reliable. I look forward to working with him as our team at Celtra
            grows from strength to strength.
            <span className="font-black">"</span>
          </p>
          <p className="testcontent italic font-semibold text-white mt-4 text-xl">
            Raushida Vasaiwala (GM of APAC){" "}
            <span className="font-black">|</span> Celtra (MarTech Software)
          </p>
          </div>
          <div>
          <p className="testcontent font-light text-xl md:text-2xl xl:text-4xl text-white mt-8">
            <span className="font-black">"</span>Terry Burns - bar none the best
            Recruiter I've ever worked with. Ask for him by name 🙂
            <span className="font-black">"</span>
          </p>
          <p className="testcontent italic font-semibold text-white mt-4 text-xl">
            Gary Chan (Head of Talent)<span className="font-black"> |</span>{" "}
            Cornerstone on Demand (HCM software)
          </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

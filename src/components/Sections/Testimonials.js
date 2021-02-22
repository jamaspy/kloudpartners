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
            className="font-black text-4xl md:text-8xl text-white leading-loose	"
            style={{ lineHeight: 1.2 }}
          >
            trusted by global industry leaders
          </p>
        </div>

        <div>
          <p className="testcontent text-xl md:text-2xl text-white text-justify">
            <span className="font-black">"</span>Deserunt nostrud do eu in qui
            proident culpa. Lorem nisi est id et adipisicing commodo aute
            adipisicing. Mollit elit sit est tempor sint culpa dolore quis sint.
            Cupidatat est culpa excepteur nulla non velit fugiat pariatur veniam
            ea mollit enim eiusmod. Reprehenderit esse sit deserunt id. Aliqua
            anim enim dolor mollit. Pariatur sit ad laboris velit commodo
            reprehenderit aute non.<span className="font-black">"</span>
          </p>
          <p className="italic font-semibold text-white mt-4">
            John Smith <span className="font-black">|</span> SalesForce
          </p>
          <p className="testcontent text-xl md:text-2xl text-white mt-4 text-justify">
            <span className="font-black">"</span>Deserunt nostrud do eu in qui
            proident culpa. Lorem nisi est id et adipisicing commodo aute
            adipisicing. Mollit elit sit est tempor sint culpa dolore quis sint.
            Cupidatat est culpa excepteur nulla non velit fugiat pariatur veniam
            ea mollit enim eiusmod. Reprehenderit esse sit deserunt id. Aliqua
            anim enim dolor mollit. Pariatur sit ad laboris velit commodo
            reprehenderit aute non.<span className="font-black">"</span>
          </p>
          <p className="italic font-semibold text-white mt-4">
            John Smith <span className="font-black">|</span> SalesForce
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

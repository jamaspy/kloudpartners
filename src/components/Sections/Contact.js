import React, { useEffect } from "react"
import SVG from "../../images/last.svg"
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Contact = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
  }
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: ".trigger",
      start: "top bottom",
    })
    tl.from(
      ".contsvg",
      { y: 100, opacity: 0, duration: 1.5, scale: 0.5 },
      "-=1"
    )
  }, [])
  return (
    <div className="trigger flex flex-col w-full">
      <div className="w-full h-full flex justify-center p-4">
        <img className="contsvg" src={SVG} alt="svg contact" />
      </div>
      <div className="w-full h-full flex-auto flex-col justify-around bg-gradient-to-t from-mainBlue to-darkBlue p-8">
        <div className="">
          <p className="font-black text-4xl md:text-8xl text-white text-center">
            get in touch today
          </p>
        </div>
        <div className="mt-12 h-full">
          <div className="flex flex-row justify-center items-center mb-8">
            <p className="text-4xl md:text-6xl text-white mr-4">
              <FiPhoneCall className="text-white" />
            </p>
            <p className="text-2xl md:text-6xl text-white font-bold">
              +61 474 152 239
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="text-4xl md:text-6xl text-white mr-4">
              <FiMail className="text-white" />
            </p>
            <p className="text-2xl md:text-6xl text-white font-bold">
              <a href="mailto:terry@kloudpartners.com">
                terry@kloudpartners.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

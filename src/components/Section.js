import React, { useEffect } from "react"
import SVG from "../../images/top.svg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const Section = ({ title, copy, image }) => {
  return (
    <div className="flex flex-auto flex-col lg:flex-row w-full">
      <div id="left" className="w-full h-full flex justify-center p-4">
        {/* <img className="" src={SVG} alt="svg" /> */}
        <img className="" src={image} alt={title} />
      </div>
      <div
        id="right"
        className=" w-full h-full flex-auto flex-col justify-around bg-gradient-to-t from-darkBlue to-mainBlue p-4"
      >
        <div className="">
          <p className="font-black md:text-7xl text-white">
            {title}
            {/* help growing software companies scale quickly */}
          </p>
        </div>

        <div>
          {copy &&
            copy.map((paragraph, index) => (
              <p key={index} className="text-2xl text-white">
                {paragraph}
              </p>
            ))}
          {/* <p className="text-2xl text-white">
            Deserunt nostrud do eu in qui proident culpa. Lorem nisi est id et
            adipisicing commodo aute adipisicing. Mollit elit sit est tempor
            sint culpa dolore quis sint. Cupidatat est culpa excepteur nulla non
            velit fugiat pariatur veniam ea mollit enim eiusmod. Reprehenderit
            esse sit deserunt id. Aliqua anim enim dolor mollit. Pariatur sit ad
            laboris velit commodo reprehenderit aute non.
          </p>
          <p className="text-2xl text-white mt-4">
            Deserunt nostrud do eu in qui proident culpa. Lorem nisi est id et
            adipisicing commodo aute adipisicing. Mollit elit sit est tempor
            sint culpa dolore quis sint. Cupidatat est culpa excepteur nulla non
            velit fugiat pariatur veniam ea mollit enim eiusmod. Reprehenderit
            esse sit deserunt id. Aliqua anim enim dolor mollit. Pariatur sit ad
            laboris velit commodo reprehenderit aute non.
          </p> */}
        </div>
      </div>
    </div>
  )
}

export default Section

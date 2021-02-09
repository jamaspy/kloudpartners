import React from "react"
import SVG from "../../images/middle.svg"

const About = () => {
  return (
    <div className="min-h-screen xl:h-screen flex flex-col xl:flex-row-reverse w-full">
      <div id="left" className="w-full h-full flex justify-center p-8">
        <img className="" src={SVG} alt="svg" />
      </div>
      <div
        id="right"
        className="w-full h-full flex flex-col justify-evenly bg-gradient-to-t from-mainBlue to-darkBlue p-8"
      >
        <div className="mb-8">
          <p
            className="font-black text-4xl md:text-8xl text-white leading-loose	"
            style={{ lineHeight: 1.2 }}
          >
            help growing software companies scale quickly
          </p>
        </div>

        <div>
          <p className="text-xl md:text-2xl text-white text-justify">
            Deserunt nostrud do eu in qui proident culpa. Lorem nisi est id et
            adipisicing commodo aute adipisicing. Mollit elit sit est tempor
            sint culpa dolore quis sint. Cupidatat est culpa excepteur nulla non
            velit fugiat pariatur veniam ea mollit enim eiusmod. Reprehenderit
            esse sit deserunt id. Aliqua anim enim dolor mollit. Pariatur sit ad
            laboris velit commodo reprehenderit aute non.
          </p>
          <p className="text-xl md:text-2xl text-white mt-4 text-justify">
            Deserunt nostrud do eu in qui proident culpa. Lorem nisi est id et
            adipisicing commodo aute adipisicing. Mollit elit sit est tempor
            sint culpa dolore quis sint. Cupidatat est culpa excepteur nulla non
            velit fugiat pariatur veniam ea mollit enim eiusmod. Reprehenderit
            esse sit deserunt id. Aliqua anim enim dolor mollit. Pariatur sit ad
            laboris velit commodo reprehenderit aute non.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

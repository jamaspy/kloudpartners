import React from "react"
import SVG from "../../images/last.svg"
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
const Contact = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-full flex justify-center p-4">
        <img src={SVG} alt="svg contact" />
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
              0423 576 498
            </p>
          </div>
          <div className="flex flex-row justify-center items-center">
            <p className="text-4xl md:text-6xl text-white mr-4">
              <FiMail className="text-white" />
            </p>
            <p className="text-2xl md:text-6xl text-white font-bold">
              info@kloudpartners.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

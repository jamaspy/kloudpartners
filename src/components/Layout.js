import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen bg-gray-200">
        {children}
        <footer className="py-2 text-center text-kpDark text-lg font-semibold static bottom-0">
          &copy; Kloud Partners 2020
        </footer>
      </div>
    </>
  )
}

export default Layout

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import notFoundImage from "../images/not-a-path.svg"

export default () => {
  return (
    <Layout>
      <main className="max-w-4xl flex-grow mx-auto flex flex-col justify-center">
        <p className="text-6xl font-black text-center text-kpDark">
          Oh No! You appear to gone off track.
        </p>
        <img className="p-4" src={notFoundImage} alt="Page not found" />
        <Link to="/">
          <p className="text-6xl font-black text-center text-kpDark">
            Click here to return home.
          </p>
        </Link>
      </main>
    </Layout>
  )
}

import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go Home</Link>
      </p>
    </Layout>
  )
}

export default NotFound

import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>404: Not Found  !! Error Occured</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness so sad.</p>
  </Layout>
)

export default NotFoundPage

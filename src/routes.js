import React from "react"
import { Route, IndexRoute } from "react-router"

// Components
import Layout from "./components/layout/Layout"
import BaseLayout from "./components/base/Layout"
import NotFound from "./components/404"

export default (
  <Route path="/" component={ Layout }>
    <IndexRoute component={ BaseLayout }/>
    <Route path="*" component={ NotFound }/>
  </Route>
)

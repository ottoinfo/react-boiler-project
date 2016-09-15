import React from "react"
import { observer } from "mobx-react"
import Wrapper from "../../mobx_wrapper"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./style.scss"

@observer
export default class Layout extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
    options: React.PropTypes.string,
  }

  render() {
    return (
      <Wrapper id="layout">
        <Header />
        <div id="content" className={styles.content}>
          { this.props.children }
        </div>
        <Footer />
      </Wrapper>
    )
  }

}
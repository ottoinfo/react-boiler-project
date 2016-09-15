import React from "react"
import { observer } from "mobx-react"
import styles from "./style.scss"

@observer
export default class BaseLayout extends React.Component {

  static contextTypes = {
    BaseStore: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context)
    this.BaseStore = context.BaseStore
  }

  componentDidMount() {
    if (!this.BaseStore.isLoaded) {
      this.BaseStore.fetch()
    }
  }

  render() {
    return (
      <div className={styles.layout}>
        <p>Base Component Layout</p>
      </div>
    )
  }
}
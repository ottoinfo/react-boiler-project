import React from "react"
import { observer } from "mobx-react"

// Stores
import BaseStore from "./stores/BaseStore"
import UIStore from "./stores/UIStore"

// Setup Params on Stores
BaseStore.setup({ UIStore })

@observer
export default class MobxWrapper extends React.Component {
  static propTypes = { children: React.PropTypes.node }
  
  static childContextTypes = {
    BaseStore: React.PropTypes.object,
    UIStore: React.PropTypes.object,
  }

  getChildContext() {
    return {
      BaseStore,
      UIStore,
    }
  }

  render() {
    return (
      <div id="wrapper">
        {this.props.children}
      </div>
    )
  }
}
import React, { PureComponent } from 'react'

export class Pure extends PureComponent {
  render() {
    return (
      <div>Pure{this.props.name}</div>
    )
  }
}

export default Pure
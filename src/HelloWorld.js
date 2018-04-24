import React from 'react'

class HelloWorld extends React.Component {
  render () {
    if (this.props.visible === true) {
      return (
        <p>
          Hello {this.props.name}
        </p>
      )
    } else {
      return null
    }
  }
}

export default HelloWorld

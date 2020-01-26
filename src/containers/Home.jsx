import React, { Component } from 'react'
import webpack from '../assets/images/webpack.png'

class Home extends Component {
  state = {
    name: 'John'
  }

  render() {
    const { name } = this.state
    return (
      <div>
        Hello {name}
        <br />
        <img src={webpack} alt='webpack' />
      </div>
    )
  }
}

export default Home

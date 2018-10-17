import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Title extends Component {

  render() {
    return (
      <h1>
        <Link to="/">PhotoWall</Link>
      </h1>
    )
  }
}

export default Title
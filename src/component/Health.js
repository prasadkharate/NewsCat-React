import React, { Component } from 'react'
import News from './News';
export class Health extends Component {
  render() {
    return (
      <div><News pageSize={5} country="in" category="health"/></div>
    )
  }
}

export default Health
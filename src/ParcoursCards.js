import React, { Component } from 'react'
import './Competences.css'

class ParcoursCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='parcoursCards'>
        <img className='losange' src='img/losange.png' />
        <div className='parcoursText' id='pText'>
          <p>{this.props.date}</p>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}
export default ParcoursCards

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Projet.css'

class CardsProjet extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div className='projetCards'>
          <div className='projet'>
            <img className='status' src={this.props.status} />
            <a href={this.props.link}>
              <img className='projetLogo' src={this.props.logo} />
            </a>
            <p className='projetText'>{this.props.text}</p>
          </div>
        </div>
      </Router>
    )
  }
}

export default CardsProjet

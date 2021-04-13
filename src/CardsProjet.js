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
        <div className='projet'>
          <img className='status' src={this.props.status} />
          <a href={this.props.link}>
            <img className='projetLogo' src={this.props.logo} />
          </a>
        </div>
      </Router>
    )
  }
}

export default CardsProjet

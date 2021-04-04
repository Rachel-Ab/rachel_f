import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Competences.css'

class CardsCompetences extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div className='competencesCards'>
          <img className='competencesImg' src={this.props.img} />
          <h3>{this.props.title}</h3>
          <img className='competencesImg2' src='img/barre.png' />
          <div className='grey'>
            <p>{this.props.rang}</p>
          </div>
        </div>
      </Router>
    )
  }
}

export default CardsCompetences

import React, { Component } from 'react'
import axios from 'axios'
import CardsCompetences from './CardsCompetences'
import Parcours from './Parcours'
import './Competences.css'

class Competences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      competences: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3003/competences')
      .then(res => this.setState({ competences: res.data }))
  }
  render() {
    return (
      <div className='competencesPage'>
        <div className='competences'>
          <h1>Compétences</h1>
          {this.state.competences.map(id => (
            <CardsCompetences {...id} key={id} />
          ))}
        </div>
        <Parcours />
      </div>
    )
  }
}
export default Competences

import React, { Component } from 'react'
import axios from 'axios'
import CardsProjet from './CardsProjet'
import './Projet.css'

class Projet extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projet: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3003/projet')
      .then(res => this.setState({ projet: res.data }))
  }
  render() {
    return (
      <div className='projetPage'>
        <h1>Projet</h1>
        <div className='CardsProjet'>
          {this.state.projet.map(id => (
            <CardsProjet {...id} key={id} />
          ))}
        </div>
      </div>
    )
  }
}
export default Projet

import React, { Component } from 'react'
import axios from 'axios'
import ParcoursCards from './ParcoursCards'
import './Competences.css'

class Parcours extends Component {
  constructor(props) {
    super(props)
    this.state = {
      parcours: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3003/parcours')
      .then(res => this.setState({ parcours: res.data }))
  }
  render() {
    return (
      <div className='parcours'>
        {this.state.parcours.map(id => (
          <ParcoursCards {...id} key={id} />
        ))}
      </div>
    )
  }
}
export default Parcours

import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import HomeStatus from './HomeStatus'

class Competences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homepage: []
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:3003/homepage')
      .then(res => this.setState({ homepage: res.data }))
  }
  render() {
    return (
      <div className='home'>
        <h1>Homepage</h1>
        {this.state.homepage.map(id => (
          <HomeStatus {...id} key={id} />
        ))}
      </div>
    )
  }
}
export default Competences

import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'
import HomeStatus from './HomeStatus'

class Home extends Component {
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
        {this.state.homepage.map(id => (
          <HomeStatus {...id} key={id} />
        ))}
        <div className='homeHeader'>
          <p id='hours'>14:22</p>
          <img className='batterie' src='img/batterie.png' />
          <a className='credits' href=''>
            ?
          </a>
        </div>
      </div>
    )
  }
}
export default Home

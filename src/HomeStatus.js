import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './Home.css'

class HomeStatus extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Router>
        <div className='homeStatus'>
          <img className='avatar' src={this.props.avatar} />
          <div className='infos'>
            <p>{this.props.pseudo}</p>
            <p>{this.props.points}</p>
          </div>
        </div>
      </Router>
    )
  }
}

export default HomeStatus

import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Competences from './Competences'

function App() {
  return (
    <div className='App'>
      <Switch>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/competences' component={Competences} />
      </Switch>
    </div>
  )
}

export default App

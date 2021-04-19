import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Competences from './Competences'
import Home from './Home'
import Projet from './Projet'

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/competences' component={Competences} />
        <Route path='/projet' component={Projet} />
      </Switch>
    </div>
  )
}

export default App

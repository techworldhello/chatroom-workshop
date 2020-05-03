import React from 'react'
import './App.css'
import Chatroom from './Chatroom'

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <Chatroom name="Jessie's"/>
        <Chatroom name="Thoughtworks'"/>
      </div>
    )
  }
}

export default App

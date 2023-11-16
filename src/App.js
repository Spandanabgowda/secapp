import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
const App = () => {
  function Clickme(){
    console.log("action done");
  }
  return (
    <div className="container">
      <div className="header"><Header/></div>
      <div className="body"><Body fun={Clickme}/></div>
      
      
    </div>
  )
}

export default App

      

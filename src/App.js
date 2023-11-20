import React from 'react'
import Navigation from './Navigation'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import TodoList from './Components/TodoList'

const App = () => {
  return (
    <div>
      <Router>
        <div>
      <Navigation/>
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/todolist' element={<TodoList/>}/>
      </Routes>
      </Router>
      </div>
  )
}

export default App
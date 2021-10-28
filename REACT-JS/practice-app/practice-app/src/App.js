import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>

      <Route exact path="/">
        <Home/>
      </Route>

      <Route>

      </Route>





    </Router>
  )
}

export default App

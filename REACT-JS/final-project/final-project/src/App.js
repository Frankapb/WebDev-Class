import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Slider from './components/Slider'

function App() {
  return (
    <div>
      
      <Header />
      <Slider />

    </div>
  )
}

export default App

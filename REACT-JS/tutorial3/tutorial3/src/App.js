  
import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
// import Blog from './Blog'
// import RadioPlayer from './components/RadioPlayer'
import RadioList from './RadioList'
//import ContactForm from './components/ContactForm'
// http://icecast.vrtcdn.be/radio1-high.mp3

function App() {

  const [radioname,setRadioName] = useState('default radio name')

  

  const selectedRadio = (name)=>{
    console.log(name)
    setRadioName(name)
  }

  return (
    <Container>
      {/* <ContactForm/> */}
      {/* <RadioPlayer radioUrl="http://icecast.vrtcdn.be/radio1-high.mp3"/> */}
      {/* <Blog/> */}
      <RadioList radioHandler={selectedRadio} radioname={radioname} />
    </Container>
  )
}

export default App
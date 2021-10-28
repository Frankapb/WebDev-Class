import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Footer from './components/Footer';
import NavigationLinks from './components/NavigationLinks';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
// OWrdipYQ9gk4eQq1va3jzocqrS7xvVQTxAbLhCLkocLijp98


function App() {
    return (
        <Router>
            {/* navigation */}
            
            <NavigationLinks/>

            <Switch>
                {/* make routes here */}
                <Route exact path="/">
                {/* http://localhost:3000/ */}
                    {/* component should be here */}
                    <Home/>
                </Route>
                <Route path="/projects">
                {/* http://localhost:3000/projects */}
                    <Projects/>
                </Route>
                
                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/contact">
                    <Contact/>
                </Route>

                <Route>
                    <NotFound/>
                </Route>
            </Switch>


            <Footer/>

        </Router>
    )
}

export default App
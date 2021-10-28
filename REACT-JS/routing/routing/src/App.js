import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Detail from './pages/Detail'
import Homepage from './pages/Homepage'
export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* link nav part */}

                <ul>
                    <li>
                        <Link to="/about">Go to About</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Homepage data="Hello user" />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/:id">
                        <Detail/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
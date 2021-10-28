import React, { useState,useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Container, Row, Col, CardGroup } from 'react-bootstrap'
import CardComponent from './components/Card'
import Slider from './components/Slider'



function App() {


    return (
        <div>
            <Header />
            {/* CONTAINER CONTEXT SECTION */}
            <Slider />
            <Container fluid={true}>
                {/* <h1>container</h1> */}
                <Row>
                    <Col className="bg-dark text-light p-3" sm={10}>
                {/* <Test/> */}
                        <CardGroup>
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                            <CardComponent />
                        </CardGroup>

                    </Col>
                    <Col className="bg-secondary text-light p-3" sm={2}>sm=4</Col>
                </Row>
            </Container>

            <Footer />
        </div>
    )
}

export default App
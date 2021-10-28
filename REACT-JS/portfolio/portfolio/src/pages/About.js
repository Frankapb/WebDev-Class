import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function About() {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={12} className="bg-dark text-light p-5">
                    <h1>About Me</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default About
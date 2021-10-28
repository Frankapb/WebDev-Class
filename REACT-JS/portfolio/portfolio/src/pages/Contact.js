import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function Contact() {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={12} className="bg-dark text-light p-5">
                    <h1>Contact</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact
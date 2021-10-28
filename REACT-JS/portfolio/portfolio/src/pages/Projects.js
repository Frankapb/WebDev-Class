import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
function Projects() {
    return (
        <Container fluid={true}>
            <Row>
                <Col md={12} className="bg-dark text-light p-5">
                    <h1>Projects</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Projects
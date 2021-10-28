import React from 'react'
import {Card} from 'react-bootstrap'

function CardComponent() {
    
    return (
        <Card className="p-1">
            <Card.Img variant="top" src="https://picsum.photos/200" />
            <Card.Body className="text-dark">
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

export default CardComponent
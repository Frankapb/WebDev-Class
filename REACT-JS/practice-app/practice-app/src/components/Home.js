import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { FaStar } from "react-icons/fa"
import { FaThumbsUp } from "react-icons/fa"


function Home() {
  return (
    <Card className="card" border="success" style={{ width: '30rem' }}>
      <Card.Header>My blog</Card.Header>
      <Card.Body>
        <Card.Title className="title">Adventures of a lifetime</Card.Title>
        <Card.Text className="content">
          The purpose of life, after all, is to live it,
          to taste experience to the utmost, to reach out
          eagerly and without fear for newer and richer experience.
        </Card.Text>
      </Card.Body>

      <i class="fa fa-thumbs-up" aria-hidden="true">Like</i>
      <i class="fa fa-star" aria-hidden="true">Fav</i>


    </Card>
  )
}

export default Home

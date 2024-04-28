// Body.js

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Body() {
  return (
    
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <Card>
            <Card.Header>Card 1</Card.Header>
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Card 2</Card.Header>
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>Card 3</Card.Header>
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Body;

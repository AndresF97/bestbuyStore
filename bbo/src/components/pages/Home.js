import React from "react"
import {Row,Col,InputGroup,FormControl,Button,Card} from "react-bootstrap"

function Home(){
    return(
    <div>
    <Row>
    <Col xs={{span: 4, offset: 4 }} className="text-center">
    <InputGroup className="mt-3 mb-3">
    <FormControl
      className="text-center"
      placeholder="What item do you look for?"
    />
    <InputGroup.Append>
      <Button variant="outline-secondary"><i className="fas fa-search"></i></Button>
    </InputGroup.Append>
  </InputGroup>
  </Col>
  </Row>
  <Row>
    <Col xs={3}>
    <h2>Pick Category:</h2>
    </Col>
    <Col xs={2}>
    <Button variant="outline-secondary">Secondary</Button>{' '}
    </Col>
    <Col xs={2}>
    <Button variant="outline-secondary">Secondary</Button>{' '}
    </Col>
    <Col xs={2}>
    <Button variant="outline-secondary">Secondary</Button>{' '}
    </Col>
    <Col xs={2}>
    <Button variant="outline-secondary">Secondary</Button>{' '}
    </Col>
    </Row>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    )
}

export default Home
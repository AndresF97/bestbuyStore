import React from "react"
import {Row,Col,InputGroup,FormControl,Button,Card} from "react-bootstrap"

function Home(){
    return(
    <div>
    {/* This input area will allow you to search for items */}
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
      {/* These button will have pre render data that will search for items once selected */}
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
    {/* Just like the buttons these cards will render depeneding on the info */}
  <Row className="mt-2">
  <Col>
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5792/5792405_sd.jpg;maxHeight=200;maxWidth=300" />
  <Card.Body>
    <Card.Title>WD - Easystore 4TB External USB 3.0 Portable Hard Drive - Black</Card.Title>
    <Card.Text className="text-center">$99.99</Card.Text>
    <Card.Text> 
        Portable hard drive
        Quick install guide
        USB cable
        WD Discovery™ software with WD Backup™ and WD Drive Utilities™
    </Card.Text>
  </Card.Body>
</Card>
</Col>
</Row>
    </div>
    )
}

export default Home
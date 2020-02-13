import React from "react"
import {Container,Media,Button,Form,Col,Row} from "react-bootstrap"

function Items() {
  return (
    <Container>
      <h1 className="text-center">Shopping Car</h1>
      <h1 className="text-center">Click on an Item in your Cart to view in Detail</h1>
    <Row>
      <Col><h1>Item Name</h1></Col>
      <Col><h1 className="text-center ml-5">Price</h1></Col>
      <Col><h1 className="ml-5">Quantity</h1></Col>
    </Row>
    <Container className="mb-2">
    <Media className="mt-5">
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5792/5792405_sd.jpg;maxHeight=200;maxWidth=300"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>WD - Easystore 4TB External USB 3.0 Portable Hard Drive - Black</h5>
    </Media.Body>
    <Media.Body>
      <h5>$99.99</h5>
    </Media.Body>
    <Form.Row>
    <Form.Group as={Col} xs={3}>
      <Form.Control />
    </Form.Group>
  </Form.Row>


    <Button variant="danger"><i className="fas fa-trash-alt"></i></Button>
  </Media>
  </Container>
    <Button className="float-left"variant="info"> Continue Shopping</Button>
    <Button className="float-right" variant="success">CheckOut</Button>
    <h4 className="text-center mr-5">Total $1000.00</h4>
    </Container>
  )
}

export default Items;
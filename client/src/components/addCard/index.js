import React from "react"
import {Row,Col,Card,Button} from "react-bootstrap"


function Add(){
    return (
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
      <Button variant="warning" size="lg" className='font-weight-bold' block>Add To you cart</Button>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  )
}
export default Add; 
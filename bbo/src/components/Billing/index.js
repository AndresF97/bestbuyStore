import React,{useState}from "react"
import {Col,Row,Form,Button,Container,Alert} from "react-bootstrap"


function Billing() {
    const [show, setShow] = useState(false);
    return(
        
        <Container>
            <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
        <Row>
            <Col>
            <Form>
            <Form.Group className="mt-4">
                <h1> Billing Address</h1>
                <Form.Label> Full name</Form.Label>
                <Form.Control placeholder="Your Name" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email <i className="far fa-envelope"></i></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>


            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City <i className="far fa-building"></i></Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select" placeholder="Choose your state">
                    <option>AL</option>
                    <option>AK</option>
                    <option>AR</option>
                    <option>CA</option>
                    <option>CO</option>
                    <option>CT</option>
                    <option>DE</option>
                    <option>FL</option>
                    <option>GA</option>
                    <option>HI</option>
                    <option>ID</option>
                    <option>IC</option>
                    <option>IN</option>
                    <option>KS</option>
                    <option>KY</option>
                    <option>LA</option>
                    <option>ME</option>
                    <option>MD</option>
                    <option>MA</option>
                    <option>MN</option>
                    <option>MS</option>
                    <option>MO</option>
                    <option>MT</option>
                    <option>NE</option>
                    <option>NH</option>
                    <option>NJ</option>
                    <option>NM</option>
                    <option>NY</option>
                    <option>NC</option>
                    <option>ND</option>
                    <option>OH</option>
                    <option>OK</option>
                    <option>PA</option>
                    <option>RI</option>
                    <option>SC</option>
                    <option>TN</option>
                    <option>TX</option>
                    <option>UT</option>
                    <option>VT</option>
                    <option>VA</option>
                    <option>WA</option>
                    <option>WV</option>
                    <option>WI</option>
                    <option>WY</option>
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Shipping same as Billing" />
            </Form.Group>

            </Form>
            </Col>
            <Col>
            <Col>
            <Form>
            <Form.Group className="mt-4">
                <h1>Payment</h1>
                <Form.Label>Name on Card</Form.Label>
                <Form.Control placeholder="Name on Card" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Credit Card Number</Form.Label>
                <Form.Control  placeholder="1111-1111-1111" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Exp Month</Form.Label>
                <Form.Control as="select">
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>Mar</option>
                    <option>Apr</option>
                    <option>May</option>
                    <option>Jun</option>
                    <option>Jul</option>
                    <option>Aug</option>
                    <option>Sept</option>
                    <option>Oct</option>
                    <option>Nov</option>
                    <option>Dec</option>
                </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Exp Year</Form.Label>
                <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>CVV</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>
            </Form>
            {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
            </Col>

            </Col>
        </Row>
        </Container>
    )
    
}

export default Billing;
import React,{Component} from "react"
import {Row,Col,InputGroup,FormControl,Button,Card} from "react-bootstrap"
import API from "../utils/API"
class Home extends Component{
  state={ 
    items:[],
    singleSearch:"",
    salesPrice:"",
    shortDescription:""
  }

  componentDidMount(){
    this.loadItem()
  }
  loadItem = () =>{
    API.getItem(this.state.singleSearch)
    .then(res=> {
      this.setState({items: res.data})
      console.log(this.state.singleSearch)
    })

  }
  handleInputChange = event =>{
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
    console.log(value)
  }


  handleFormSubmit = (event) =>{
    event.preventDefault()
    API.getItem(this.state.item)
    .then(res => this.setState({items:this.value}))
    .catch(err => console.log(err))
  } 

  buttonSubmit = (item) => {
    this.setState({singleSearch: item})
    this.loadItem();
  }

  render(){
    
    return(
  
    <div>
    {/* This input area will allow you to search for items */}
    <Row>
    <Col xs={{span: 4, offset: 4 }} className="text-center">
    <InputGroup className="mt-3 mb-3">
    <FormControl
      className="text-center"
      placeholder="What item do you look for?"
      value={this.state.item || ""}
      onChange={this.handleInputChange}
    />
    <InputGroup.Append>
      <Button  
      onClick ={this.handleFormSubmit} 
      variant="outline-secondary">
      <i className="fas fa-search"></i></Button>
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
    <Button 
    variant="outline-secondary"
    value="Camera"
    onClick={()=> this.buttonSubmit("camera")}
    >Camera</Button>{' '}
    </Col>
    <Col xs={2}>
    <Button 
    variant="outline-secondary"
    value="Telivsion"
    onClick={()=> this.buttonSubmit("tv")}
    >Telivision</Button>{' '}
    </Col>
    <Col xs={2}>
    <Button 
    variant="outline-secondary"
    value="Computers"
    onClick={()=> this.buttonSubmit("computer")}
    >Computers</Button>{' '}
    </Col>
    <Col xs={2}>
    <Button 
    onClick={()=> this.buttonSubmit("monitor")}
    variant="outline-secondary"
    value="Monitors"
    >Monitors</Button>{' '}
    </Col>
    </Row>
    {/* Just like the buttons these cards will render depeneding on the info */}
  <Row className="mt-2">
  {this.state.items.map(data =>{
      return(
        <Col  key={data.sku}>
  <Card style={{ width: '18rem' }} className="text-center">
  <Card.Img variant="top" src={data.image}/>
  <Card.Body>
    <Card.Title>{data.name}</Card.Title>
    <Card.Text className="text-center">${data.salePrice}</Card.Text>
    <Card.Text> 
       <h4>Description:</h4> {data.shortDescription}
    </Card.Text>
    <Button variant="primary">Add to cart</Button>{' '}
    <Button variant="warning">View Details</Button>{' '}
  </Card.Body>
</Card>
</Col>

      )
    })}
</Row>
    </div>
    )
    }
}

export default Home
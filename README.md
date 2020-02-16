## Site Picture
![BestBuyMarket](https://media-exp1.licdn.com/dms/image/C4E22AQF-o2QfVfZ1Eg/feedshare-shrink_800/0?e=1584576000&v=beta&t=uckpnMf1_D8tFOVkHRscIxzDIs3yDrU7GzU9LiPVysE)


## Technologies Used
- HTML - used to create elements on the DOM
- CSS - styles html elements on page
- Git - version control system to track changes to source code
- GitHub - hosts repository that can be deployed to GitHub Pages
- react.js - is used to set the structure of the website.
- mongooes -To display the calls that are excuted to the server.
- express - to set up the routes
- axios- to pull information
## Summary 
In this website you save products and save them to your cart.

## Code Snippet
``
<script>
<div>
    <Row className="mt-2">
  {this.state.items.map(data =>{
      return(
        <Col key={data.sku}>
      <Card style={{ width: '18rem' }} className="text-center">
      <Card.Img variant="top" src={data.image}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className="text-center">${data.salePrice}</Card.Text>
        <Card.Text value={data.shortDescription}> 
          <h4>Description:</h4> {data.shortDescription}
    </Card.Text>
    <Button variant="primary" onClick={this.saveCart}  value={data.shortDescription} name={[data.name,data.image,data.fulfilledBy,data.salePrice]}>Add to cart</Button>
    <Button variant="warning" id={data.sku}>View Details</Button>
  </Card.Body>
</Card>
</Col>

      )
    })}
</Row>
</div>

</script>

-This is the code that allows you get the information form the API call.  


## Author Links
[LinkedIn](linkedin.com/in/andres-felipe-jimenez-ferreira-b67a35192)
[GitHub](https://github.com/AndresF97)

import React from 'react'
import Name from './Name';
import Description from './Description';
import Price from './Price';
import Image from './Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product'

const Cards = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
        <Description></Description>
        </Card.Text>
        <Card.Text>
        <Card.Text>
        <Description></Description>
        </Card.Text>        </Card.Text>

x        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
       
      
     
    </div>
  )
}

export default Cards

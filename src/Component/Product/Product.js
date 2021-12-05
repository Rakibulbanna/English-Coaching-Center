import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
const Product = (props) => {
   // console.log(props.product);
    const {name,img,price,stock,seller,star }=props.product;
    
    return (
          <Col>
      <Card>
        <Card.Img variant="top" src={img} alt="" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          
          <h3>price : ${price}</h3>
           <Rating
           initialRating={star} 
          emptySymbol="far fa-star fa-2x icon-color"
          fullSymbol="fas fa-star fa-2x icon-color"
          ></Rating>
          <Card.Text>
          <p>by : {seller}</p>
             <p><small>only {stock} left in stock - order soon</small>
           </p>
          </Card.Text>
          <button  
                onClick={() => props.handleAddToCart(props.product)}
             className="purchase-button">{<FontAwesomeIcon icon={faShoppingCart} />}&nbsp;&nbsp;add to cart</button>
        </Card.Body>
      </Card>
    </Col> 
    
        
    );
};

export default Product;
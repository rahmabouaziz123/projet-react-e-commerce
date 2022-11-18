import React from "react";
import "./ProductCard.scss";
import "./ProductCard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Button from 'react-bootstrap/Button';



export const ProductCard = ({ product }) => {
  return (
    // <div>***ProductCard****
    //     {product.price}
    //     <img src={product.image} alt="" />
    // </div>

    // <div>
    //      <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={product.image} />
    //   <Card.Body>
    //     <Card.Title>{product.nameProd}</Card.Title>
    //     <Card.Text>
    //     {product.price}
    //     <span> DT</span>
    //     </Card.Text>
    //   </Card.Body>

    //   <Card.Body>
    //     <Card.Link href="#">Card Link</Card.Link>
    //     <Card.Link href="#">Another Link</Card.Link>
    //   </Card.Body>
    // </Card>
    // </div>

    <div  className="productCard2">
        
      {/* <div className="box">
        <div className="content">
          <img src={product.image} />
        </div>
      </div> */}

      <div className="productCard1">
        <Card style={{ width: '20rem' }}  >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <div className="box cercle">
        <div className="content">
          <img src={product.image} />
        </div>
      </div>
      <Card.Body>
        <Card.Title>{product.nameProd}</Card.Title>
        <Card.Text>
        {product.price}
        <span> DT</span>
        </Card.Text>
        <div className="btnCard">
        <Button variant="primary">Buy</Button>
        <Button variant="primary">Detail</Button>
        </div>
      </Card.Body>
    </Card>
      

        </div>

    </div>
  );
};

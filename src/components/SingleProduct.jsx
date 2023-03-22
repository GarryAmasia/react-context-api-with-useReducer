import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  return (
    <div className="products">
      <Card>
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.name}
        ></Card.Img>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <br />
          <Card.Subtitle>
            <span>{product.price.split(".")[0]} AUD</span>
            <br /> <br />
            {product.fastDelivery ? (
              <span>Fast Delivery</span>
            ) : (
              <span>3 days delivery</span>
            )}
            <br />
            <Rating rating={product.ratings} />
          </Card.Subtitle>
          <br />
          <Button variant="danger">Remove from cart</Button>
          <Button disabled={!product.inStock}>
            {!product.inStock ? "Out of stock" : "Add to cart"}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;

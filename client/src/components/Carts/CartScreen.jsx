import React, { useEffect, useState } from "react";

// import { Card, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import ItemQty from "./ItemQty";

import { AiFillDelete } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";

import { removeFromCart } from "../../redux/actions/actionCart";

/////////////////////////////////
import { Table } from "@nextui-org/react";

import "./CartScreen.css";
import { Button, Grid } from "@nextui-org/react";
import { Facture } from "../Facture/Facture";
import { Link } from "react-router-dom";

/////////////////////////

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  // console.log(cartItems);

  const [total, setTotal] = useState();

  const calculateAmount = (quantity, price) => {
    const quantityNumber = parseFloat(quantity) || 1;
    const priceNumber = parseFloat(price) || 0;
    let amount = 0;

    if (quantityNumber && priceNumber) {
      amount = quantityNumber * priceNumber;
    }
    return amount.toFixed(2);
  };

  useEffect(() => {
    let total = 0;

    cartItems.forEach((el) => {
      total += parseFloat(calculateAmount(el.qty, el.price));
    });

    setTotal(total);
  }, [total, cartItems]);

  const dispatch = useDispatch();

  return (
  
    <div>
      <Table
        aria-label="Example static collection table with multiple selection"
        css={{
          height: "auto",
          minWidth: "40%",
          width:"100%",
        }}
        selectionMode="multiple"
      >
        <Table.Header>
          <Table.Column className=" title">Product Image</Table.Column>
          <Table.Column className=" title"> Name Product</Table.Column>
          <Table.Column className=" title">Price</Table.Column>
          <Table.Column className=" title">Q stock</Table.Column>
          <Table.Column className=" title">quantite</Table.Column>
          <Table.Column className=" title">delete</Table.Column>
        </Table.Header>

        <Table.Body>
          {cartItems &&
            React.Children.toArray(
              cartItems.map((el, index) => (
                <Table.Row key={index}>
                  <Table.Cell>
                    <img className="imageCart" src={el.image} alt="" />
                  </Table.Cell>
                  <Table.Cell >{el.nameProd}</Table.Cell>
                  <Table.Cell  >{el.price}</Table.Cell>
                  <Table.Cell  >{el.quantity}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <ItemQty el={el}  />
                  </Table.Cell>
                  <Table.Cell>
                    {" "}
                    <AiFillDelete
                      onClick={() => dispatch(removeFromCart(el.product))}
                    >
                      <FiDelete />
                    </AiFillDelete>{" "}
                  </Table.Cell>
                </Table.Row>
               
                  
              ))
            )}
          
        </Table.Body>
      </Table>

      <div className=" totalDiv">
        {" "}
        <span className="textTotal"> Total </span>
        <span className="prixTotal"> {total}</span>
      </div>
      
      <div>
      <Link to={"/facture"}>
      <Grid className="facture">
        <Button color="primary" auto ghost>
        Facture
        </Button>
      </Grid>
      </Link>
      </div>
     
    </div>
  );
};

export default CartScreen;

import React, { useEffect } from "react";
import { Table } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  removeProduct,
} from "../../redux/actions/actionProduct";

import { CiCirclePlus } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

import { Button, Grid } from "@nextui-org/react";

import "./ListAdmin.css";
// import { AddProduct } from "./AddProduct";
import { Link } from "react-router-dom";
import { EditProduct } from "./EditProduct";
import { AddProduct } from "./AddProduct";
import { ListVertical } from "./ListVertical";

export const ListAdmin = () => {
  //store
  const { products } = useSelector((state) => state.productReducer);
    console.log(products);

  //dispatch getallproducts
  const dispatch = useDispatch();

  //useeffect
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <div className="btnAddProduct1">
        <AddProduct />
      </div>

      <div className="tab1">
        <Table
          aria-label="Example static collection table with multiple selection"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
          selectionMode="multiple"
        >
          <Table.Header>
            <Table.Column>N</Table.Column>
            <Table.Column>Image</Table.Column>
            <Table.Column>Category</Table.Column>
            <Table.Column>NAME</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Quantity</Table.Column>
            <Table.Column>Actions</Table.Column>
          </Table.Header>
          <Table.Body>
            {products &&
              products.map((el, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{i + 1}</Table.Cell>
                  <Table.Cell>
                    {" "}
                    <img src={el.image} alt="" className="imgListPro" />
                  </Table.Cell>
                  <Table.Cell>{el.category}</Table.Cell>
                  <Table.Cell>{el.nameProd}</Table.Cell>
                  <Table.Cell>{el.price}</Table.Cell>
                  <Table.Cell>{el.quantity}</Table.Cell>
                  <Table.Cell>
                    <div className="actionLogo">
                      
                      <span>
                      <Link  to={`/detailProduct/${el._id}`}>
                        <Button auto shadow color="secondary">
                          <CiCirclePlus />
                        </Button>
                        </Link>
                      </span>

                      <span>
                        <Grid>
                          <EditProduct produit={el} />
                        </Grid>
                      </span>

                      {/* **********************delete */}
                      <span>
                        <Button
                          auto
                          shadow
                          color="secondary"
                          onClick={() => {
                            dispatch(removeProduct(el._id));
                            dispatch(getAllProducts());
                          }}
                        >
                          <CiTrash />
                        </Button>
                      </span>
                      {/* ************** fin*delete** */}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
       
        <div>
          <ListVertical/>
        </div>
    </div>
  );
};

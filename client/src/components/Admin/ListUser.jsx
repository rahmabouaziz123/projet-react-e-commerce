import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getAllusers } from "../../redux/actions/actionUser";
import { Table } from "@nextui-org/react";
import {  Grid } from "@nextui-org/react";

import { EditUser } from "./EditUser";

export const ListUser = () => {
  //store
  const { usersall } = useSelector((state) => state.userReducer);

  // console.log(usersall)



  
  //dispatch getallproducts
  const dispatch = useDispatch();

  //useeffect
  useEffect(() => {
    dispatch(getAllusers());
  }, []);

 

  return (
    <div className="listusertable">
      <Table
        className="tabuser"
        aria-label="Example static collection table"
        css={{
          height: "auto",
          // minWidth: "100%",
          // maxWidth:"100%",
        }}
        selectionMode="single"
      >
        <Table.Header>
          <Table.Column>fullName</Table.Column>
          <Table.Column>email</Table.Column>
          <Table.Column>adresse</Table.Column>
          <Table.Column>userRole</Table.Column>
          <Table.Column>bloking</Table.Column>
          <Table.Column>Action</Table.Column>
        </Table.Header>
        <Table.Body>
          {usersall &&
            usersall.map((el, i) => (
              <Table.Row key={i}>
                <Table.Cell>{el.fullName}</Table.Cell>
                <Table.Cell>{el.email}</Table.Cell>
                <Table.Cell>{el.adresse}</Table.Cell>
                <Table.Cell>{el.userRole}</Table.Cell>

                <Table.Cell>  
                  {String(el.blocking)}
                 
                  
                  </Table.Cell>
                <Table.Cell>
                  <span>
                   
                      <Grid>
                       
                        < EditUser user={el}/>

                      </Grid>
                     
                    
                  
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

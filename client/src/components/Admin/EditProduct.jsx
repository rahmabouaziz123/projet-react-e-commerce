import React, { useEffect } from "react";

import "./EditProduct.css";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { CiEdit } from "react-icons/ci";
/////////////////////////////////////////
import axios from "axios";
import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  editeProduct,
  getAllProducts,
} from "../../redux/actions/actionProduct";
import { Radio, RadioGroup } from "@chakra-ui/react";
import StarRating from "./ratings/StarRating";

//////////////////////////////////////

export const EditProduct = ({ produit }) => {
  const { setVisible, bindings } = useModal();
  /////////////////////////////////////////////
  // console.log(product)

  //state
  const [nameProd, setNameProd] = useState(produit.nameProd);
  const [price, setPrice] = useState(produit.price);
  const [category, setCategory] = useState(produit.category);
  const [image, setImage] = useState(produit.image);
  const [description, setDescription] = useState(produit.description);
  const [rating, setRating] = useState(produit.rating);
  const [quantity, setQuantity] = useState(produit.quantity);
  const [sold, setSold] = useState(produit.sold);
  // const [value, setValue] = useState("");
  // const [value2, setValue2] = useState("2");
  // const [value3, setValue3] = useState("3");
  const [prixf, setPrixf] = useState(produit.price-(produit.price*produit.sold)/100)


  //  useEffect(() => {
  //   setPrixf(produit.price-(produit.price*produit.sold)/100)
     
  //  }, []);

  ////////////////////////////////exepmle

  ////////////Configuration images
  const fileSelectedHandler = async (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    fd.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/upload/up", fd, config);
      console.log(data);

      setImage(data);
      image && console.log(image);
    } catch (error) {
      console.log(error);
    }
  };

  /////////////////////fin configuration

  //// handleSubmit

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("image", setImage(image));

    const editProduct = {
      _id: produit._id,
      nameProd,
      price,
      category,
      image,
      description,
      rating,
      quantity,
      sold,
      
    };
    dispatch(editeProduct(editProduct)) && dispatch(getAllProducts());

 
    // setNameProd("");
    // setPrice("");
    // setCategory("");
    // setImage("");
    // setDescription("");
    // setRating("");
    // setQuantity("");
  };
  useEffect(() => {}, [
    nameProd,
    price,
    category,
    image,
    description,
    rating,
    quantity,
    sold,
    prixf,
    
  ]);

   

  /////////////////////////////////////////
  return (
    <div>
      <div>
        {/* Edit */}
        <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
          <CiEdit />
        </Button>
        <Modal
          scroll
          width="600px"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...bindings}
        >
          <Modal.Header>
            <Text id="modal-title" className="textForm" size={18}>
              Formulaire Edit Product
            </Text>
          </Modal.Header>
          <Modal.Body>
            <div>
              <Flex bg="gray.100" h="110vh" align="center" justify="center">
                <Box bg="white" p={2} w="80vh" className="box1" h="110vh">
                  {/*  onSubmit={handleSubmit} */}
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4} align="flex-start">
                      <FormControl>
                        <FormLabel htmlFor="nameProd">NameProd</FormLabel>
                        <Input
                          id="nameProd"
                          name="nameProd"
                          type="text"
                          variant="filled"
                          placeholder="nameProd"
                          value={nameProd}
                          
                          onChange={(e) => setNameProd(e.target.value)}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="price">price </FormLabel>
                        <Input
                          id="price"
                          name="price"
                          type="number"
                          variant="filled"
                          placeholder="price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                      </FormControl>

                      <FormControl>
                      <FormLabel htmlFor="sold">Sold </FormLabel>
                        <Input
                          id="sold"
                          name="sold"
                          type="number"
                          variant="filled"
                          placeholder="price"
                          value={sold}
                          onChange={(e) => setSold(e.target.value)}
                        />
                      </FormControl>
                          
                         
                      <FormControl>
                        <FormLabel htmlFor="price final">Price Final </FormLabel>
                        <Input
                          id="prixf"
                          name="prixf"
                          type="number"
                          variant="filled"
                          // placeholder="***"
                          isDisabled
                         
                          // value={prixf}
                          //////tres bien 
                          // value= {(produit.price-(produit.price*produit.sold)/100)}
                          value= {price -(price*sold)/100}
                         
                           

                  
                        

                         
                        />
                      </FormControl>

                      <FormLabel htmlFor="price">Category </FormLabel>

                      {/* <CheckboxGroup colorScheme="green">
                        <Stack spacing={[1, 5]} direction={["column", "row"]}>
                          <Checkbox
                            name="homme"
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            homme
                          </Checkbox>
                          <Checkbox
                            name="femme"
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            femme
                          </Checkbox>
                          <Checkbox
                            name="enfant"
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            enfant
                          </Checkbox>
                        </Stack>
                      </CheckboxGroup> */}

                      {/* <RadioGroup onChange={setValue} value={value} > */}
                      {/* onChange={setValue1} value1={value1} */}

                      {/* onChange={setCategory()} */}
                      {/* value={category} */}
                      <RadioGroup >
                        <Stack direction="row">
                          <Radio
                          name="femme"
                            // value="1"
                           
                            // checked={category =="femme"? true : false }
                            // defaultChecked ={category=="femme" ? true : false}
                            isChecked ={category=="femme" ? true : false}
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            Femme
                          </Radio>

                          <Radio
                            // value={produit.category}
                             name="homme"
                            // checked={value == "2" ? true : false}
                            // checked= {{category}=="homme"? true : false }
                            isChecked ={category=="homme" ? true : false}
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            Homme
                          </Radio>
                          <Radio
                               name="enfant"
                            // value="3"
                            // checked={value== "3" ? true : false}
                            isChecked ={category=="enfant" ? true : false}
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            Enfant
                          </Radio>
                        </Stack>
                      </RadioGroup>

                      <div></div>

                      <FormControl>
                        <FormLabel htmlFor="image">Image</FormLabel>
                        <Input
                          id=" image"
                          name="image"
                          variant="filled"
                          placeholder="image"
                          type="file"
                          onChange={fileSelectedHandler}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input
                          id="description"
                          name="description"
                          type="text"
                          variant="filled"
                          placeholder="description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="rating">Rating</FormLabel>
                        {/* <Input
                          id="rating"
                          name="rating"
                          type="text"
                          variant="filled"
                          placeholder="rating"
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        /> */}
                        <StarRating  rating={rating} setRating={setRating}  />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="quantity">Quantity</FormLabel>
                        <Input
                          id="quantity"
                          name="quantity"
                          type="text"
                          variant="filled"
                          placeholder="quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </FormControl>
                      <div className="btnAddProduct">
                        {/* <Button
                          type="submit"
                          colorScheme="purple"
                          
                          width="60%"
                          className="btnsubmit1"
                        >
                          ADD
                        </Button> */}

                        <Button
                          className="btnsubmit1"
                          auto
                          type="submit"
                          onClick={() => setVisible(false)}
                        >
                          Edit
                        </Button>
                      </div>
                    </VStack>
                  </form>
                </Box>
              </Flex>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={() => setVisible(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

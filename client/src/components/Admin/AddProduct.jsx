import React, { useEffect } from "react";

import "./AddProduct.css";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { CgAdd } from "react-icons/cg";

/////////////////////////////////////////
import { createProduct } from "../../redux/actions/actionProduct";
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
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Radio, RadioGroup } from "@chakra-ui/react";

import StarRating from "./ratings/StarRating";

//////////////////////////////////////

export const AddProduct = () => {
  const { setVisible, bindings } = useModal();
  /////////////////////////////////////////////

  //state
  const [nameProd, setNameProd] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [sold, setSold] = useState("");
  const [quantity, setQuantity] = useState("");
  const [value, setValue] = React.useState("");
  const [prixf, setPrixf] = useState(0);
  // const [total, setTotal] = useState();

  ////////////////////////////////exepmle

  //store pour sold
  // const { products } = useSelector((state) => state.productReducer);

  // const prixFinal = (sold1, price1) => {
  //   const sold = parseFloat(sold1);
  //   const price = parseFloat(price1);
  //   let res = 0;
  //   res = sold * price;
  //   return res;
  // };

  //   useEffect(() => {
  //     let total = 0;

  //     products.forEach(el => {
  //         total = parseFloat(prixFinal(el.price, el.sold));
  //     });

  //     setTotal(total)
  // }, [total, products]);

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
    /////upload image
    const fd = new FormData();
    fd.append("image", setImage(image.name));

    const newProduct = {
      nameProd,
      price,
      category,
      image,
      description,
      rating,
      sold,
      quantity,
    };
    dispatch(createProduct(newProduct));
    setNameProd("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
    setSold("");
    setRating("");
    setQuantity("");
  };

  /////////////////////////////////////////

  return (
    <div>
      <div>
        <Button auto shadow color="secondary" onClick={() => setVisible(true)}>
          <CgAdd /> New Product
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
              Formulaire Add Product
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
                          placeholder="Sold"
                          value={sold}
                          onChange={(e) => setSold(e.target.value)}
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="price final">
                          Price Final{" "}
                        </FormLabel>
                        <Input
                          id="prixf"
                          name="prixf"
                          type="number"
                          variant="filled"
                          // placeholder="***"
                          isDisabled
                          prixf={price - (price * sold) / 100}
                          // value={ price-(price*sold)/100 }
                          value={prixf}

                          // onChange={(e) => setTotal(e.target.value)}
                        />
                      </FormControl>

                      <FormLabel htmlFor="Category">Category </FormLabel>

                      <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="row">
                          <Radio
                            value="1"
                            name="femme"
                            defaultChecked
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            Femme
                          </Radio>

                          <Radio
                            value="2"
                            name="homme"
                            onChange={(e) => setCategory(e.currentTarget.name)}
                          >
                            Homme
                          </Radio>
                          <Radio
                            name="enfant"
                            onChange={(e) => setCategory(e.currentTarget.name)}
                            value="3"
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
                          // type="text"
                          variant="filled"
                          placeholder="image"
                          // value={image}
                          // onChange={(e) => setImage(e.target.value)}
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

                        <div>
                          <StarRating rating={rating} setRating={setRating} />
                        </div>
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
                        <Button
                          className="btnsubmit1"
                          auto
                          type="submit"
                          onClick={() => setVisible(false)}
                        >
                          Add
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

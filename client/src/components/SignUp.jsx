import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { userSignUp } from "../redux/action";
import { Navigate } from "react-router-dom";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { userSignUp } from "../redux/actions/actionUser";
// import { Form, Button } from "react-bootstrap";

export const SignUp = () => {
  const { user, loading, token } = useSelector((state) => state.userReducer);
  console.log(loading);
  console.log(user);
  // console.log(token);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { fullName, email, password, adresse, telephone };
    dispatch(userSignUp(newUser));
  };

  if(token )
  return ( <Navigate to="/listProduct" />)

  return (
    <div>
      <div>
        {loading ? (
          <h1>Loading ...</h1>
        ) :
        // localStorage.getItem("token") ?  <Navigate to="/listProduct" />
         (
          <div>
            <Flex bg="gray.100" align="center" justify="center" h="100vh">
              <Box bg="white" p={14} w="80vh">
                <form>
                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="fullName">fullName</FormLabel>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        variant="filled"
                        placeholder="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="email">Email </FormLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        variant="filled"
                        placeholder="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        variant="filled"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="adresse">adresse</FormLabel>
                      <Input
                        id="adresse"
                        name="adresse"
                        type="text"
                        variant="filled"
                        placeholder="adresse"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="telephone">telephone</FormLabel>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="text"
                        variant="filled"
                        placeholder="telephone"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                      />
                    </FormControl>

                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme="purple"
                    >
                      Remember me?
                    </Checkbox>

                    <div className="x">

               
                      <Button
                        type="submit"
                        onClick={handleSubmit}
                        colorScheme="purple"
                        // width="full"
                        width="60%"
                        className="btnsubmit1"
                      >
                        Sing Up
                      </Button>
                   

                      <div>
                        <Link to="/login">
                          <Button
                            type="submit"
                            colorScheme="purple"
                            width="90%"
                            className="btnloginx"
                          >
                            Login
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </VStack>
                </form>
              </Box>
            </Flex>
          </div>
        )
        
        }
       
      </div>
    </div>
  );
};

import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// import { userLogin } from '../redux/action';
// import { Button ,Form} from "react-bootstrap";
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
import { userLogin } from "../redux/actions/actionUser";

export const Login = () => {
  const { user, loading } = useSelector((state) => state.userReducer);
  // const { user, loading, isAuth } = useSelector((state) => state.userReducer);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : localStorage.getItem("token") ? (
        <Navigate to="/privateRoute" />
      ) : (
        

        <div>
          <div>
            <Flex bg="gray.100" align="center" justify="center" h="88vh">
              <Box bg="white" p={10} w="100vh">
                <form>
                  <VStack spacing={4} align="flex-start">
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

                    <Checkbox
                      id="rememberMe"
                      name="rememberMe"
                      colorScheme="purple"
                    >
                      Remember me?
                    </Checkbox>
                    <Button
                      type="submit"
                      onClick={handleSubmit}
                      colorScheme="purple"
                      width="30%"
                      textAlign="center"
                      className="btnlogin1"
                    >
                      submit
                    </Button>
                  </VStack>
                </form>
              </Box>
            </Flex>
          </div>
        </div>
      )}
    </div>
  );
};

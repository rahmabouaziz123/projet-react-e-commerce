import { Navbar, Text } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";

export const LogoImage = () => {
  return (
    <div>
    <Link to={"/listProduct"}>
    <Navbar.Brand className="pointer1">
        <img className="loginMongo" src="../../img/loginMongo.png" alt="" />

        <Text b color="inherit" hideIn="xs">
          MANGO
        </Text>
      </Navbar.Brand>
    </Link>
    </div>
  );
};

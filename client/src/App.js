import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from '@chakra-ui/react'
import "bootstrap/dist/css/bootstrap.min.css";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { NavBar } from "./components/Nav/NavBar";
import { ListProduct } from "./components/listProduct/ListProduct";
import { useSelector } from "react-redux";
// import { AddProduct } from "./components/AddProduct";
import { PrivateRoute } from "./components/PrivateRoute";
import { useState } from "react";
import { Home } from "./components/Home";
import { ListAdmin } from "./components/Admin/ListAdmin";
import { AddProduct } from "./components/Admin/AddProduct";
import { EditProduct } from "./components/Admin/EditProduct";
import DetailProduct  from "./components/Admin/DetailProduct";
import { ListVertical } from "./components/Admin/ListVertical";
import { ListWomen } from "./components/Admin/ListWomen/ListWomen";










function App() {

  const { user } = useSelector((state) => state.userReducer);
   
 



  return (
    <div className="App">


      <NextUIProvider>
      <ChakraProvider>
     
        <Router>
          <NavBar />
          {/* {user && user.userRole === "admin" ? <AddProduct /> : null } */}
          <Routes>
          <Route path="/privateRoute"  element={<PrivateRoute />}/>
          <Route path="/listProduct" element={<ListProduct/>} />
          <Route path="/" element={<Home/> } />
          {/* <Route path="/addProduct" element={<AddProduct/>} /> */}
          <Route path="/listAdmin" element={<ListAdmin/>} />
            <Route path="/SignUp" element={<SignUp />} />

            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/detailProduct/:_id" element={<DetailProduct/>} />

            {/* <Route path="/AddNewProductAdmin" element= { <div><ListAdmin/> <AddProduct/> </div>} /> */}

            {/* <Route path="/editProduct" element= { <div> <EditProduct/> </div>} /> */}

            <Route path="/listVertical" element={<ListVertical/>} />

            <Route path="/women" element={<ListWomen />} /> 

          </Routes>
        </Router>
      
        </ChakraProvider>
      </NextUIProvider>
    
     
    </div>
  );
}

export default App;

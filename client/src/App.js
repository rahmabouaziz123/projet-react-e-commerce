import "./App.css";
import { NextUIProvider } from "@nextui-org/react";
import { ChakraProvider } from "@chakra-ui/react";
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
import DetailProduct from "./components/Admin/DetailProduct";
import { ListVertical } from "./components/Admin/ListVertical";
import { ListWomen } from "./components/Admin/ListWomen/ListWomen";
import { PdDetails } from "./components/DetailCard/PdDetails";
import { ListMen } from "./components/Admin/ListMen/ListMen";
import { ListEnfant } from "./components/Admin/ListEnfant/ListEnfant";
import CartScreen from "./components/Carts/CartScreen";
import { Facture } from "./components/Facture/Facture";
import PaypalButton from "./components/Carts/PaypalButton";
import { Testimonial } from "./components/Testimonial/Testimonial";
import { Portfolio } from "./components/portfolio/Portfolio";
// import { Introduction } from "./components/intro/Introduction";
import StarRating from "./components/Admin/ratings/StarRating";
import { Footer } from "./components/footer/Footer";
import { ListKids } from "./components/menuKids/ListKids";
import { ListHomme } from "./components/menuHomme/ListHomme";
import { ListFemme } from "./components/MenuFemme/ListFemme";
import { Contact } from "./components/contact/Contact";

import { FormspreeProvider } from "@formspree/react";


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
              <Route path="/privateRoute" element={<PrivateRoute />} />
              <Route path="/listProduct" element={<ListProduct />} />
              <Route path="/" element={<ListProduct />} />
              {/* <Route path="/addProduct" element={<AddProduct/>} /> */}
              <Route path="/listAdmin" element={<ListAdmin />} />
              <Route path="/SignUp" element={<SignUp />} />

              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />

              <Route path="/detailProduct/:_id" element={<DetailProduct />} />

              {/* <Route path="/AddNewProductAdmin" element= { <div><ListAdmin/> <AddProduct/> </div>} /> */}

              {/* <Route path="/editProduct" element= { <div> <EditProduct/> </div>} /> */}

              <Route path="/listVertical" element={<ListVertical />} />

              <Route path="/women" element={<ListWomen />} />
              <Route path="/men" element={<ListMen />} />
              <Route path="/enfant" element={<ListEnfant />} />
              <Route path="/home" element={<Home />} />
              <Route path="/detailcard/:_id" element={<PdDetails />} />
              <Route path="/cart" element={<CartScreen />} />

              <Route path="/facture" element={<Facture />} />
              <Route path="/pay" element={<PaypalButton />} />

              <Route path="/tes" element={<Testimonial />} />

              <Route path="/folio" element={<Portfolio />} />

              {/* <Route path="/intro" element={<Introduction/>} /> */}

              <Route path="/rating" element={<StarRating />} />

              <Route path="/footer" element={<Footer />} />

              <Route
                path="/kids"
                element={
                  <div>
                    {" "}
                    <Home />
                    <ListKids />
                  </div>
                }
              />

              <Route
                path="/hommes"
                element={
                  <div>
                    {" "}
                    <Home /> <ListHomme />
                  </div>
                }
              />

              <Route
                path="/femmes"
                element={
                  <div>
                    {" "}
                    <Home /> <ListFemme />
                  </div>
                }
              />

              <Route
                path="/contact"
                element={
                  <div>
                    {" "}
                    <Contact />
                  </div>
                }
              />
            </Routes>
          </Router>
        </ChakraProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;

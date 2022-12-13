import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionProduct";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ListProduct.css";
import Carousel from "react-bootstrap/Carousel";
import { Home } from "../Home";
// import { Testimonial } from "../Testimonial/Testimonial";
import { Portfolio } from "../portfolio/Portfolio";
import { Introduction } from "../intro/Introduction";
import { Footer } from "../footer/Footer";
import { Contact } from "../contact/Contact";



export const ListProduct = () => {
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
     

      <Home/>
      {/* <Introduction/> */}

     

      <div className="para1">
       
      </div>

      <div className="listProduct1">
        {products &&
          React.Children.toArray(
            products.map((el) => <ProductCard product={el} />)
          )}
      </div>
      {/* <Testimonial/> */}
      <Portfolio/>
      <Contact/>
      <Footer/>
     

    </div>
  );
};

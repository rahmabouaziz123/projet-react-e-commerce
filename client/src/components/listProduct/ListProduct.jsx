import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/actionProduct";
import { ProductCard } from "../ProductCard/ProductCard";
import "./ListProduct.css";
import Carousel from "react-bootstrap/Carousel";
import { Home } from "../Home";

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
      {/* <img
        className="imgListProduct"
        src="https://i0.wp.com/www.achat-parfums.fr/wp-content/uploads/2017/02/la-vie-est-belle-double-2013-1700.jpg?fit=1229%2C800"
        alt=""
      /> */}

      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  imgListProduct "
            src="https://st2.depositphotos.com/5586578/10102/i/600/depositphotos_101024768-stock-photo-many-mens-business-suits-of.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Vetements</h3>
            <p>Hommes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imgListProduct "
            src="https://img.freepik.com/photos-gratuite/vetements_144627-25214.jpg?w=2000"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Vetements</h3>
            <p>Femmes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imgListProduct"
            src="https://catalogue.aubert.com/images/specific/textile/vetements_fille/hero.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Vetements</h3>
            <p>Bébés</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}

      <Home/>

      <div className="para1">
        {" "}
        Vente en ligne vêtements pour homme, femme et enfant en Tunisie à bas
        prix, chemise & tunique, pantalon, robe, veste & manteau, chaussure,
        pull...
      </div>

      <div className="listProduct1">
        {products &&
          React.Children.toArray(
            products.map((el) => <ProductCard product={el} />)
          )}
      </div>
    </div>
  );
};

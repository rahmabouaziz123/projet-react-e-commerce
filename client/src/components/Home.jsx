

import React from 'react'
import "../components/listProduct/ListProduct.css";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <div>
         <Carousel>
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
      </Carousel>

      <div className="para1">
        {" "}
        Vente en ligne vêtements pour homme, femme et enfant en Tunisie à bas
        prix, chemise & tunique, pantalon, robe, veste & manteau, chaussure,
        pull...
      </div>
    </div>
   
  )
}

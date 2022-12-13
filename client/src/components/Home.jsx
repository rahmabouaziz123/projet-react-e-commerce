import React from "react";
import "../components/listProduct/ListProduct.css";
import Carousel from "react-bootstrap/Carousel";

export const Home = () => {
  return (
    <div className="divHome">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100  imgListProduct "
            // src="../../img/mango.jpg"
            src="../../img/bn1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3> </h3>
            <p> </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imgListProduct "
            // src="https://img.freepik.com/photos-gratuite/vetements_144627-25214.jpg?w=2000"
            // src="../../img/Mango2.jpg"
            src="../../img/pn2.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100  imgListProduct"
            // src="https://catalogue.aubert.com/images/specific/textile/vetements_fille/hero.jpg"
            src="../../img/mango3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="para1">
        {" "}
        {/* Vente en ligne vêtements pour homme, femme et enfant en Tunisie à bas
        prix, chemise & tunique, pantalon, robe, veste & manteau, chaussure,
        pull Lorsque des clients effectuent un achat sur votre e-boutique, ils
        se jettent à l’eau. Ils ne peuvent ni voir l’article, ni le tenir dans
        les mains, ni l’essayer. Pour rendre ce processus moins flou,  Vente en ligne vêtements
       */}
      </div>
    </div>
  );
};

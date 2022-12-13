import React from "react";
import "./ProductCard.scss";
import "./ProductCard.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actionCart";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  ///////////////////////////////brahim////
  const { user, loading } = useSelector((state) => state.userReducer);

  console.log(user);
  ///////////////////////////

  return (
    // <div className="productCard2">
    //   <div className="productCard1">
    //     <Card style={{ width: "20rem" }}>
    //       <div className="box cercle">
    //         <div className="content">
    //           <img src={product.image} />
    //         </div>
    //       </div>
    //       <Card.Body>
    //         <Card.Title>{product.nameProd}</Card.Title>
    //         <Card.Text>
    //           {product.price}
    //           <span> DT</span>
    //         </Card.Text>
    //         <div className="btnCard">
    //           <Button variant="primary">Buy</Button>
    //           <Button variant="primary">Detail</Button>
    //         </div>
    //       </Card.Body>
    //     </Card>
    //   </div>
    // </div>

    <div>
      <div className="container1">
        <div className="card">
          <div className="card-header">
            <div className="geeks">
              <img src={product.image} alt="rover" className="imgzoom2" />
            </div>
          </div>
          <div className="card-body">
            <span>
              {product.rating == "1" ? "⭐" : null}
              {product.rating == "2" ? "⭐⭐" : null}
              {product.rating == "3" ? "⭐⭐⭐" : null}
              {product.rating == "4" ? "⭐⭐⭐⭐" : null}
              {product.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
            </span>
            <h4 className="divtext5">
              <div className="titre1"> {product.nameProd}</div>
            </h4>


            <h3 className="description1"> {product.description}</h3>

            <h4 className="price2">
              <strike> {product.price}</strike>{" "}
              <span>DT</span>
            </h4>

           


            <h4 className="sold2">(Up to {product.sold} % Of)</h4>
            {/* <h4 className="prixFinal">  New Price</h4> */}
            
          
          <h4 className="prixFinal">
              {product.price - (product.price * product.sold) / 100}
              <span>DT</span>
            </h4>  

            <div className="user">
              <img src="../../img/chario.PNG" alt="user" className="logo1" />
              {/* <div className="user-info logo1 ">
                <h5 className="newprice"> new Price </h5>
                <small className="price">
                  <span>{product.price}</span>
                  <span> DT</span>
                </small>
              </div> */}
              <div className="btnCard">
                {!user ? (
                  <Link to={"/SignUp"}>
                    {" "}
                    <Button className="btnbuy" variant="primary">
                      Buy
                    </Button>
                  </Link>
                ) : (
                  <Button
                    className="btnbuy"
                    variant="primary"
                    onClick={() => dispatch(addToCart(product._id, 1))}
                  >
                    Buy
                  </Button>
                )}

                {/* <Button className="btnbuy" variant="primary"   onClick={()=>dispatch(addToCart(product._id, 1))} >Buy</Button> */}

                <Link to={`/detailcard/${product._id}`}>
                  <Button className="btndetail" variant="primary">
                    Detail
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

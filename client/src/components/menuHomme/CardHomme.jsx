
import React from 'react'
import"./CardHomme.css"
import "./CardHomme.scss"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/actions/actionCart';
export const CardHomme = ({men}) => {

  const { user, loading } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div>
       <div>
      <div className="container1">
        <div className="card">
          <div className="card-header">
            <div className="geeks">
              <img src={men.image} alt="rover" className="imgzoom2" />
            </div>
          </div>
          <div className="card-body">
            <span>
              {men.rating == "1" ? "⭐" : null}
              {men.rating == "2" ? "⭐⭐" : null}
              {men.rating == "3" ? "⭐⭐⭐" : null}
              {men.rating == "4" ? "⭐⭐⭐⭐" : null}
              {men.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
            </span>
            <h4 className="divtext5">
              <div className="titre1"> {men.nameProd}</div>
            </h4>


            <h3 className="description1"> {men.description}</h3>

            <h4 className="price2">
              <strike> {men.price}</strike>{" "}
            </h4>

           


            <h4 className="sold2">(Up to {men.sold} % Of)</h4>
            {/* <h4 className="prixFinal">  New Price</h4> */}
            
          
          <h4 className="prixFinal">
              {men.price - (men.price * men.sold) / 100}
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
                    onClick={() => dispatch(addToCart(men._id, 1))}
                  >
                    Buy
                  </Button>
                )}

                {/* <Button className="btnbuy" variant="primary"   onClick={()=>dispatch(addToCart(product._id, 1))} >Buy</Button> */}

                <Link to={`/detailcard/${men._id}`}>
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
    </div>
  )
}

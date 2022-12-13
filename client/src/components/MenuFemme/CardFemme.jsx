import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/actions/actionCart'

export const CardFemme = ({femme}) => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.userReducer);

  return (
    <div>
    
    <div>
       <div>
      <div className="container1">
        <div className="card">
          <div className="card-header">
            <div className="geeks">
              <img src={femme.image} alt="rover" className="imgzoom2" />
            </div>
          </div>
          <div className="card-body">
            <span>
              {femme.rating == "1" ? "⭐" : null}
              {femme.rating == "2" ? "⭐⭐" : null}
              {femme.rating == "3" ? "⭐⭐⭐" : null}
              {femme.rating == "4" ? "⭐⭐⭐⭐" : null}
              {femme.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
            </span>
            <h4 className="divtext5">
              <div className="titre1"> {femme.nameProd}</div>
            </h4>


            <h3 className="description1"> {femme.description}</h3>

            <h4 className="price2">
              <strike> {femme.price}</strike>{" "}
            </h4>

           


            <h4 className="sold2">(Up to {femme.sold} % Of)</h4>
            {/* <h4 className="prixFinal">  New Price</h4> */}
            
          
          <h4 className="prixFinal">
              {femme.price - (femme.price * femme.sold) / 100}
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
                    onClick={() => dispatch(addToCart(femme._id, 1))}
                  >
                    Buy
                  </Button>
                )}

                {/* <Button className="btnbuy" variant="primary"   onClick={()=>dispatch(addToCart(product._id, 1))} >Buy</Button> */}

                <Link to={`/detailcard/${femme._id}`}>
            
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
    </div>
  )
}


import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getOneProduct } from '../../redux/actions/actionProduct';

import { Button, Grid } from "@nextui-org/react";
import "./PdDetails.scss"
import "./PdDetails.css"
import { addToCart } from '../../redux/actions/actionCart';


export const PdDetails = () => {

   //reducer state
   const { product1 } = useSelector((state) => state.productReducer);

   const dispatch = useDispatch();
   const { _id } = useParams();
 
   useEffect(() => {
     dispatch(getOneProduct(_id));
   }, [_id]);

   


  return (
<div>
<div className="blog-card">
    <div className="meta">
      <div className="photo" >

      <img src={product1&&product1.image} alt="" />
        </div>
     
      <ul className="details">
        <li className="author"><a href="#"> </a> </li>
        <li className="date"> </li>
        <li className="tags">
          <ul>
            <li><a href="#">  </a></li>
            <li><a href="#"> </a></li>
            <li><a href="#">  </a></li>
            <li><a href="#"> </a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="description">
      <h1 className='nameProd'>{product1&&product1.nameProd}</h1>
      <h2 className='rating'>
      <span>
              {product1&&product1.rating == "1" ? "⭐" : null}
              {product1&&product1.rating == "2" ? "⭐⭐" : null}
              {product1&&product1.rating == "3" ? "⭐⭐⭐" : null}
              {product1&&product1.rating == "4" ? "⭐⭐⭐⭐" : null}
              {product1&&product1.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
            </span>
      </h2>
      <p className='description'>{product1&&product1.description}</p>
      <p className='quantity1 '> QUANTITE: {product1&&product1.quantity}</p>
      <p className='price'><span> {product1&&product1.price}</span>
      <span>DT </span></p>

      {/* <h1 className='addToCart'> ADD to Cart</h1> */}

      <Grid>

        <Button color="gradient" auto className='addToCart' onClick={()=>dispatch(addToCart(product1._id, 1))}  >
        ADD to Cart
        </Button>
      </Grid>




      <p className="read-more">
        {/* <a href="#">Callback</a> */}
        <Link to={"/"} >
        <p>Callback </p>
        </Link>
      </p>
    </div>
  </div>
 
</div>

  )
}

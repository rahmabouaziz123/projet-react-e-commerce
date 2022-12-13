
import React from 'react'

import "./CardMen.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const CardMen = ({men}) => {



  return (
    // <div>
    //  <div className="container1">
    //     <div className="card">
    //       <div className="card-header">
    //         <div className="geeks">
    //         <img
    //           src={men.image}
    //           alt="rover"
    //           className="imgzoom2"
    //         />
    //         </div>
    //       </div>
    //       <div className="card-body">
    //         <span className="tag tag-teal">
    //            {men.rating == "1" ? "⭐" : null}
    //           {men.rating == "2" ? "⭐⭐" : null}
    //           {men.rating == "3" ? "⭐⭐⭐" : null}
    //           {men.rating == "4" ? "⭐⭐⭐⭐" : null}
    //           {men.rating == "5" ? "⭐⭐⭐⭐⭐" : null}</span>
    //         <h4 className="divtext5"><div className="p"> {men.nameProd}</div></h4>
    //         <h3 className="description1"> {men.description }</h3>
            
     
    //         <div className="user">
          
    //           <img
    //             src="https://www.shutterstock.com/image-vector/creative-modern-abstract-ecommerce-logo-260nw-2134594629.jpg"
    //             alt="user"
    //           />
    //           <div className="user-info">
    //             <h5 className="newprice"> new Price </h5>
    //             <small className="price"><span> {men.price - (men.price * men.sold) / 100}</span>
    //             <span> DT</span>
    //             </small>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
   

    // </div>

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
       
         
       
       <h4 className="prixFinal">
           {men.price - (men.price * men.sold) / 100}
         </h4>  

         <div className="user">
           <img src="../../img/chario.PNG" alt="user" className="logo1" />
          
           <div className="btnCard">
            

             {/* <Button className="btnbuy" variant="primary"   onClick={()=>dispatch(addToCart(product._id, 1))} >Buy</Button> */}

             <Link to={`/detailProduct/${men._id}`}>
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

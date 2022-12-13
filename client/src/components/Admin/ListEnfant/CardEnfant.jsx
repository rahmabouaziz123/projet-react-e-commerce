

import React from 'react'
import "./CardEnfant.css"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const CardEnfant = ({enfant}) => {

  return (
    // <div>
    //     <div>
    //  <div className="container1">
    //     <div className="card">
    //       <div className="card-header">
    //         <div className="geeks">
    //         <img
    //           src={enfant.image}
    //           alt="rover"
    //           className="imgzoom2"
    //         />
    //         </div>
    //       </div>
    //       <div className="card-body">
    //         <span className="tag tag-teal">
    //         {enfant.rating == "1" ? "⭐" : null}
    //           {enfant.rating == "2" ? "⭐⭐" : null}
    //           {enfant.rating == "3" ? "⭐⭐⭐" : null}
    //           {enfant.rating == "4" ? "⭐⭐⭐⭐" : null}
    //           {enfant.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
    //         </span>
    //         <h4 className="divtext5"><div className="p"> {enfant.nameProd}</div></h4>
    //         <h3 className="description1"> {enfant.description }</h3>
            
     
    //         <div className="user">
          
    //           <img
    //             src="https://www.shutterstock.com/image-vector/creative-modern-abstract-ecommerce-logo-260nw-2134594629.jpg"
    //             alt="user"
    //           />
    //           <div className="user-info">
    //             <h5 className="newprice"> new Price </h5>
    //             <small className="price"><span>{enfant.price - (enfant.price * enfant.sold) / 100}</span>
    //             <span> DT</span>
    //             </small>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
   

    // </div>
    // </div>

    <div>
    <div>
   <div className="container1">
     <div className="card">
       <div className="card-header">
         <div className="geeks">
           <img src={enfant.image} alt="rover" className="imgzoom2" />
         </div>
       </div>
       <div className="card-body">
         <span>
           {enfant.rating == "1" ? "⭐" : null}
           {enfant.rating == "2" ? "⭐⭐" : null}
           {enfant.rating == "3" ? "⭐⭐⭐" : null}
           {enfant.rating == "4" ? "⭐⭐⭐⭐" : null}
           {enfant.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
         </span>
         <h4 className="divtext5">
           <div className="titre1"> {enfant.nameProd}</div>
         </h4>


         <h3 className="description1"> {enfant.description}</h3>

         <h4 className="price2">
           <strike> {enfant.price}</strike>{" "}
         </h4>

        


         <h4 className="sold2">(Up to {enfant.sold} % Of)</h4>
       
         
       
       <h4 className="prixFinal">
           {enfant.price - (enfant.price * enfant.sold) / 100}
         </h4>  

         <div className="user">
           <img src="../../img/chario.PNG" alt="user" className="logo1" />
          
           <div className="btnCard">
            

             {/* <Button className="btnbuy" variant="primary"   onClick={()=>dispatch(addToCart(product._id, 1))} >Buy</Button> */}

             <Link to={`/detailProduct/${enfant._id}`}>
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

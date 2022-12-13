import React from "react";

import "./CardWomen.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const CardWomen = ({ woman }) => {
  return (
    
      // <div className="container1">
      //   <div className="card">
      //     <div className="card-header">
      //       <div className="geeks">
      //       <img
      //         src={woman.image}
      //         alt="rover"
      //         className="imgzoom2"
      //       />
      //       </div>
      //     </div>
      //     <div className="card-body">
      //       <span className="tag tag-teal">
      //       {woman.rating == "1" ? "⭐" : null}
      //         {woman.rating == "2" ? "⭐⭐" : null}
      //         {woman.rating == "3" ? "⭐⭐⭐" : null}
      //         {woman.rating == "4" ? "⭐⭐⭐⭐" : null}
      //         {woman.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
      //       </span>
      //       <h4 className="divtext5"><div className="p"> {woman.nameProd}</div></h4>
      //       <h3 className="description1"> {woman.description }</h3>
            
     
      //       <div className="user">
          
      //         <img
      //           src="https://www.shutterstock.com/image-vector/creative-modern-abstract-ecommerce-logo-260nw-2134594629.jpg"
      //           alt="user"
      //         />
      //         <div className="user-info">
      //           <h5 className="newprice"> new Price </h5>
      //           <small className="price"><span>{woman.price - (woman.price * woman.sold) / 100}</span>
      //           <span> DT</span>
      //           </small>
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
             <img src={woman.image} alt="rover" className="imgzoom2" />
           </div>
         </div>
         <div className="card-body">
           <span>
             {woman.rating == "1" ? "⭐" : null}
             {woman.rating == "2" ? "⭐⭐" : null}
             {woman.rating == "3" ? "⭐⭐⭐" : null}
             {woman.rating == "4" ? "⭐⭐⭐⭐" : null}
             {woman.rating == "5" ? "⭐⭐⭐⭐⭐" : null}
           </span>
           <h4 className="divtext5">
             <div className="titre1"> {woman.nameProd}</div>
           </h4>
  
  
           <h3 className="description1"> {woman.description}</h3>
  
           <h4 className="price2">
             <strike> {woman.price}</strike>{" "}
           </h4>
  
          
  
  
           <h4 className="sold2">(Up to {woman.sold} % Of)</h4>
         
           
         
         <h4 className="prixFinal">
             {woman.price - (woman.price * woman.sold) / 100}
           </h4>  
  
           <div className="user">
             <img src="../../img/chario.PNG" alt="user" className="logo1" />
            
             <div className="btnCard">
              
  
               {/* <Button className="btnbuy" variant="primary"   onClick={()=>dispatch(addToCart(product._id, 1))} >Buy</Button> */}
  
               <Link to={`/detailProduct/${woman._id}`}>
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
   
  );
};

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getkidsProd } from "../../../redux/actions/actionProduct";
import { ListVertical } from "../ListVertical";
import { CardEnfant } from "./CardEnfant";

import "./ListEnfant.css";

export const ListEnfant = () => {
  //// state

  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getkidsProd());
  }, [dispatch]);

  return (
    <div>
           <div>   <ListVertical/></div>
      <div className="ListEnfants">
        {products &&
          React.Children.toArray(
            products.map((el) => <CardEnfant enfant={el} />)
          )}
      </div>
    </div>
  );
};

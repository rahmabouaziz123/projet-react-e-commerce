import React, { useEffect } from "react";
import"./ListHomme.css"
import { useDispatch, useSelector } from "react-redux";
import { getMenProd } from "../../redux/actions/actionProduct";
import { CardHomme } from "./CardHomme";

export const ListHomme = () => {
  //// state

  const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenProd());
  }, [dispatch]);

  return (
    <div>
      <div className="homme1"> Produit Hommes </div>
      <div>
        <div className="ListMen1">
          {products &&
            React.Children.toArray(
              products.map((el) => <CardHomme men={el} />)
            )}
        </div>
      </div>
    </div>
  );
};

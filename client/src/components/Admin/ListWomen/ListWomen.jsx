
import React from 'react'

import  { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWomenProd } from "../../../redux/actions/actionProduct";
import { CardWomen } from './CardWomen';
import "./ListWomen.scss";


export const ListWomen = () => {

    const { products } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getWomenProd());
    }, [dispatch]);
  
    return (
      <div>
        {products &&
                React.Children.toArray(
                  products.map((el) => <CardWomen woman={el} />)
                )}
      </div>
    );

 
}

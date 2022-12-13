

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMenProd } from '../../../redux/actions/actionProduct';
import { ListVertical } from '../ListVertical';
import { CardMen } from './CardMen';

import"./ListMen.css"



export const ListMen = () => {
    //// state 

    const { products } = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenProd());
  }, [dispatch]);

  return (
    <div>
      <div>   <ListVertical/></div>
      <div className='ListMen1'>
      {products &&
                React.Children.toArray(
                  products.map((el) => <CardMen men={el} />)
                )}
      </div>
   

    </div>
  )
}

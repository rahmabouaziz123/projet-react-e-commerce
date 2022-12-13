

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getWomenProd } from '../../redux/actions/actionProduct'
import { CardFemme } from './CardFemme'
import"./ListFemme.css"

export const ListFemme = () => {
//state de product

  const {products}=useSelector((state)=> state.productReducer)

//   console.log(products)
  const dispatch = useDispatch();

  useEffect(() => {
  
  dispatch(getWomenProd())

  }, [dispatch])
  

  return (
    <div>
        <div className='femme1'> List Femmes</div>
<div className='ListFemme1'>{products&&
    React.Children.toArray(products.map(el=><CardFemme femme={el}/>))}</div>
    </div>
  )
}

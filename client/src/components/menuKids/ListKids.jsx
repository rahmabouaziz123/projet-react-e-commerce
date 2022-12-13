import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getkidsProd } from '../../redux/actions/actionProduct';
import { CardKids } from './CardKids';
import"./ListKids.css"


export const ListKids = () => {

  const {products}= useSelector((state)=>state.productReducer);
  const dispatch = useDispatch();
 
 useEffect(() => {
  dispatch(getkidsProd())
 
 }, [dispatch])

  return (
    <div>
      <div className='enfant'> Produit Enfant</div>
    <div  className="ListEnfants1">
       
  {products&&React.Children.toArray(products.map((el)=><CardKids  kids={el} />))}

    </div>
    </div>
  )
}

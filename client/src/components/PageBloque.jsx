

import React from 'react'
import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { logout } from '../redux/actions/actionUser'
import "./PageBloque.css"

export const PageBloque = () => {

const dispatch = useDispatch();
  return (
    <div className='bageBloque'>
      <div>   vous etre bloquer !!! </div>
      
 <button  onClick={() => dispatch(logout())}>
              Logout
            </button> 
           
      
    </div>
  )
}

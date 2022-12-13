
import React from 'react'

import './FloatingDiv.css'

export const FloatingDiv = ({img, text1, text2}) => {
  return (
    <div>
        <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
    </div>
  )
}

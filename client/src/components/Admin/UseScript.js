// import React from 'react'

// export const useScript = () => {
//   return (
//     <div>useScript</div>
//   )
// }

import React from 'react'

import { useEffect } from "react"

export const UseScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url

   

 

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])
}



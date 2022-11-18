import { GETPRODUCTS } from "../actionTypes/actionTypeProduct";



const init = {
    products:null,
    error:null,
    loading:false
}

export const productReducer = ( state = init , {type, payload} ) => {
    switch (type) {
       
        case GETPRODUCTS:
       
            return {
                ...state, products:payload
            }
      
       
       
    
        default:
            return state
    }
}

export default productReducer;
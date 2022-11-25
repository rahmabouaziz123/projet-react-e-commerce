import { ADDPRODUCT, ADDPRODUCT_FAIL, ADDPRODUCT_SUCCESS, DELETEPRODUCT, DETAILPRODUCT, GETPRODUCTS, GET_WOMEN_PRODUCT, UPDATEPRODUCT } from "../actionTypes/actionTypeProduct";

const init = {
  products: null,
  error: null,
  loading: false,
  product1:null
};

export const productReducer = (state = init, { type, payload }) => {
  switch (type) {

    case ADDPRODUCT: 
    return {
        ...state,loading:true
    }
case ADDPRODUCT_SUCCESS:
    return {
        ...state, products:[...state.products, payload],loading:false
    }
case ADDPRODUCT_FAIL:
    return {
        ...state, error:payload,loading:false
    }


    case UPDATEPRODUCT:
      return {
          ...state, products:state.products.map( el => el._id === payload._id ?payload :el)
      }
           
      case DELETEPRODUCT:
        return {
            ...state, products:state.products.filter(el => el._id !== payload)
        }


    case GETPRODUCTS:
      case GET_WOMEN_PRODUCT:
      return {
        ...state,
        products: payload,
      };

      case DETAILPRODUCT:
        return {
            ...state, product1:payload
        }

    default:
      return state;
  }
};

export default productReducer;

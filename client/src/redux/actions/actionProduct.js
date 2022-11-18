import axios from "axios";
import { GETPRODUCTS } from "../actionTypes/actionTypeProduct";


//get all products
export const getAllProducts = () => async(dispatch) => {
    try {
      const res = await axios.get("/product/getAllProduct");
      dispatch (
        {
        type : GETPRODUCTS,
        payload : res.data
        }
      );
    } catch (error) {
      alert("get all products error")
    }
  };
  
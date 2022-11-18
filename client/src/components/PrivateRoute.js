import React from 'react'
import { useSelector } from 'react-redux';

import { Navigate} from "react-router-dom";

export const PrivateRoute = () => {

    const { user, loading } = useSelector((state) => state.userReducer);
    // console.log(loading);
    // console.log(user);

    return user.userRole=="user" ? <Navigate to="/listProduct" />: <Navigate to="/addProduct" />;
}

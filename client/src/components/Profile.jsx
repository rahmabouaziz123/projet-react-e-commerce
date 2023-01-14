import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../redux/actions/actionUser";

// import { getUserProfile } from "../redux/action";

export const Profile = () => {
  const { user, loading } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
 console.log(user)


  useEffect(() => {
    dispatch(getUserProfile());
  }, []);

 
  return (
   
    <div>
      <div className="divProfile">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <div>{user && <h1>{`Hello ${user.fullName}`}</h1>}</div>
           
          </div>
        )}
      </div>
    </div>
  );
};

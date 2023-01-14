import React, { useEffect, useState } from "react";
import { Button, Grid } from "@nextui-org/react";
import { BiBlock } from "react-icons/bi";
import { editeUser, getAllusers } from "../../redux/actions/actionUser";
import { useDispatch } from "react-redux";
import { FcApproval } from "react-icons/fc";

export const EditUser = ({ user }) => {
  const [blocking, setBlocking] = useState(user.blocking);

  const activeBloking = () => {
    setBlocking(!blocking);
  };

  console.log(blocking);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    activeBloking();
    const editUser5 = { _id: user._id, blocking };

    dispatch(editeUser(editUser5));
    dispatch(getAllusers());
  };

  useEffect(() => {
  
  }, []);

  return (
    // {blocking ? <FcApproval/> : <BiBlock />}
    <div>
      {/* <div>
        <Button shadow color="secondary" auto  onClick={handleSubmit}>
        {blocking ? <FcApproval/> : <BiBlock />} 
        </Button>
      </div> */}

      <div>
        <button onClick={handleSubmit}>
          {/* {blocking == true ? <BiBlock /> : <FcApproval />} */}
          <BiBlock />
        </button>
      </div>
    </div>
  );
};

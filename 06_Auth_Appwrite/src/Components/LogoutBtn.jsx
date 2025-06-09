import React from "react";
import { useDispatch } from "react-redux";
import { authServices } from "../AppWrite/Auth";
import { logout } from "../Redux/authSlice";

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button className='btn btn-warning btn-outline duration-200' onClick={logoutHandler}>
      Logout
    </button>
  );
}

export default LogoutBtn;

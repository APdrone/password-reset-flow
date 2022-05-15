import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loginpage from "../pages/Loginpage";
import Registerpage from "../pages/Registerpage";
import Homepage from "../pages/Homepage";
import Forgetpage from "../pages/Forgetpage";
import ResetPage from "../pages/ResetPage";
// import { useSelector } from "react-redux";

const UserRoutes = () => {
  // const isLogged = useSelector((state) => state.user.isLoggedIn);
  return (
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/forget" element={<Forgetpage />} />
      {/* {isLogged && <Route path="/home" element={<Homepage />} />} */}
      <Route path="/home" element={<Homepage />} />
      <Route path="/api/v1/users/resetPassword/:id" element={<ResetPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default UserRoutes;

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, isAuth }) => {
  console.log("ProtectedRoute - isAuthenticated:", isAuth); // Log the isAuthenticated prop
  // If the user is not authenticated, redirect to the login page
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected route children (Main page)
  return children;
};

export default ProtectedRoute;

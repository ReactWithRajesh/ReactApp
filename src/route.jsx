import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Dashboard";
import Login from "./Login/Login";
import ProtectedRoute from "./protectedRoute"; // Import the ProtectedRoute component

export const AppRoutes = ({ isAuth }) => {
  console.log("AppRoutes - isAuthenticated:", isAuth); // Log the isAuthenticated prop

  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Protected Main route */}
      <Route
        path="/main"
        element={
          <ProtectedRoute isAuth={isAuth}>
            <Main />
          </ProtectedRoute>
        }
      />

      {/* Redirect to Main or Login based on isAuthenticated */}
      <Route
        path="*"
        element={<Navigate to={isAuth ? "/main" : "/login"} />}
      />
    </Routes>
  );
};

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Dashboard/VenderForm"; 
import Login from "./Login/Login";

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      setAuth(true);
    }
  }, []); 

  return (
    <div style={styles.appContainer}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              auth ? (
                <Navigate to="/main" />
              ) : (
                <Login auth={auth} setAuth={setAuth} />
              )
            }
          />
          <Route path="/main" element={auth ? <Main /> : <Navigate to="/" />} />
          <Route
            path="*"
            element={auth ? <Navigate to="/main" /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Inline styles to center content
const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100vw",
    alignItems: "center",
    height: "100vh", // Full screen height
    margin: 0,
    backgroundColor: "#f4f4f9", // Optional background color
  },
};

export default App;

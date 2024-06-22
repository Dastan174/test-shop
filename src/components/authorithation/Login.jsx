import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Alert, Box, TextField } from "@mui/material";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Login = () => {
  const { signIn } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSignInSubmit() {
    try {
      await signIn(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {error && <Alert severity="error">{error}</Alert>}
      <Box sx={{ width: "200px", height: "200px" }} className="modal">
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            width: "350px",
            height: "400px",
            textAlign: "center",
            background: "#6899f2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <TextField
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            width: "350px",
            height: "400px",
            textAlign: "center",
            background: "#6899f2",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        />

        <Button onClick={handleSignInSubmit}>sign in</Button>
      </Box>
      <Box>
        <Link to="/register">Register now</Link>
      </Box>
    </Box>
  );
};

export default Login;

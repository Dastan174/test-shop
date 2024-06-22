import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Alert, Box, TextField } from "@mui/material";
import { Button } from "antd";

const Register = () => {
  const { signInWithGoogle, register } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit() {
    try {
      await register(email, password);
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

        <Button onClick={handleSubmit}>sign up</Button>
        <Button onClick={() => signInWithGoogle()}>sign in with google</Button>
      </Box>
    </Box>
  );
};

export default Register;

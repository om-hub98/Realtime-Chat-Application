/** @format */

import { Button, FormControl, Input, InputLabel } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <div 
      style={{ display: "flex", 
      flexDirection: "column", 
      justifyContent:"center", 
      alignItems:"center",
      }}
      >
        <h1>Login</h1>
        <FormControl style={{ marginTop: "3rem" }}>
          <InputLabel htmlFor="my-input">Email</InputLabel>
          <Input
            id="email"
            variant="filled"
            style={{ width: "25rem", height: "7vh" }}
          />
        </FormControl>
        <FormControl style={{margin:"1rem 0rem 2rem 0rem"}}>
          <InputLabel htmlFor="my-input">Password</InputLabel>
          <Input
            id="password"
            variant="filled"
            style={{ width: "25rem", height: "5vh"}}
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          align="center"
          variant="contained"
          color="primary"
          onClick={() => {
            alert("You have Successfully Loged in!");
          }}
        >
          LogIn
        </Button>
        <p style={{ marginTop: "1rem" }}>
          Don't Have an account?{" "}
          <span style={{ color: "blue", cursor: "pointer" }}>
            Register Here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

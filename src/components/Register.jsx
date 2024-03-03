/** @format */

import { Button } from "@mui/material";
import React from "react";

const Register = () => {
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <form>
          <label>First Name</label>
          <input id="fname" type="text" />
          <label>Last Name</label>
          <input id="lname" type="text" />
          <label>Email</label>
          <input id="email" type="email" />
          <label>Password</label>
          <input id="password" type="password" />
          <input type="file" />
          <Button
            type="submit"
            fullWidth
            align="center"
            variant="contained"
            color="primary"
            onClick={() => {
              alert("You have Successfully register !");
            }}
          >
            Register
          </Button>
          <p style={{ marginTop: "1rem" }}>
            Already Have an account?{" "}
            <span style={{ color: "blue", cursor: "pointer" }}>Login Here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

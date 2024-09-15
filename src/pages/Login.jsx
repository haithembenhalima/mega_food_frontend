import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="login-form" style={loginFormStyle}>
        <h3 style={{marginBottom: 45}}>قم بتسجيل دخولك</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <FloatLabel>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <label
              htmlFor="username"
              style={{ marginButtom: 5, marginLeft: 250 }}
            >
              البريد الإلكتروني
            </label>
          </FloatLabel>

          <FloatLabel style={{ marginTop: "35px" }}>
            <InputText
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <label
              htmlFor="password"
              style={{ marginButtom: 5, marginLeft: 280 }}
            >
              كلمة المرور
            </label>
          </FloatLabel>

          <Button type="submit" label="تسجيل الدخول" style={buttonStyle} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

// Styles for the login form
const loginFormStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "50px",
  marginBottom: "150px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "400px",
};

const inputStyle = {
  width: "100%",
};

const buttonStyle = {
  marginTop: "35px",
  width: "100%",
};

export default Login;

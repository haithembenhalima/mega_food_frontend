import React, { useState } from "react";
import "../App.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputMask } from "primereact/inputmask";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAdress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Username:", name);
    console.log("Password:", password);
  };

  return (
    <div className="container">
      <Navbar />
      <div className="login-form" style={loginFormStyle}>
        <h3>انظم إلى عالم ميقافود</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <FloatLabel>
            <InputText
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
            <label htmlFor="name" style={{ marginButtom: 5, marginLeft: 310 }}>
              الإسم
            </label>
          </FloatLabel>

          <InputMask
            style={{ marginTop: "35px", paddingRight:30 }}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="9999999999"
            placeholder="رقم الهاتف"
          />

          <FloatLabel style={{ marginTop: "35px" }}>
            <InputText
              id="email"
              type="email"
              value={email}
              keyfilter="email"
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <label htmlFor="email" style={{ marginButtom: 5, marginLeft: 250 }}>
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

          <FloatLabel style={{ marginTop: "35px" }}>
            <InputText
              id="adress"
              type="text"
              value={adress}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
            <label
              htmlFor="password"
              style={{ marginButtom: 5, marginLeft: 310 }}
            >
              العنوان
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

          <Button type="submit" label="التسجيل" style={buttonStyle} />
        </form>
      </div>
      <Footer />
    </div>
  );
}

// Styles for the signup form
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

export default Signup;

import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { loginAction } from "../redux/login/actions";
import { Toast } from "primereact/toast";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = React.useRef(null);
  const { loginData, loginLoading, loginError } = useSelector(
    (state) => state.login
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginAction({ email, password }));

    if (!loginAction.fulfilled.match(result)) {
      toast.current.show({
        severity: "error",
        summary: "خطأ في تسجيل الدخول",
        detail: "يرجى التأكد من البريد الإلتروني أو كلمة المرور",
        life: 6000,
      });
    } else if (loginAction.fulfilled.match(result)) {
      const {id, name , email, token, role} = result.payload;
      localStorage.setItem("userId", id);
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userToken", token);
      localStorage.setItem("role", role);

      window.location.href = "/";

    }
  };

  return (
    <div className="container">
      <Navbar />
      <div className="login-form" style={loginFormStyle}>
        <h3 style={{ marginBottom: 45 }}>قم بتسجيل دخولك</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <FloatLabel>
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <label htmlFor="email" style={{ marginBottom: 5, marginLeft: 250 }}>
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
              style={{ marginBottom: 5, marginLeft: 280 }}
            >
              كلمة المرور
            </label>
          </FloatLabel>
          <Link to="/forgot-password" style={{ marginTop: 15, fontSize: 14, marginRight: 7 }}>
            هل نسيت كلمة السر؟
          </Link>
          <Button
            type="submit"
            label={loginLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            style={buttonStyle}
            disabled={loginLoading}
          />
        </form>
      </div>
      <Toast ref={toast} />
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

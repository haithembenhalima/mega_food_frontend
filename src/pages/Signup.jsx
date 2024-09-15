import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupAction } from "../redux/signup/actions";
import { redirect } from "react-router-dom";
import "../App.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputMask } from "primereact/inputmask";
import { Toast } from "primereact/toast";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [adress, setAddress] = useState("");
  const dispatch = useDispatch();
  const toast = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const signupData = {
      name,
      email,
      phone,
      password,
      adress,
    };

    try {
      const resultAction = await dispatch(signupAction(signupData));
      if (signupAction.fulfilled.match(resultAction)) {
        // Successful signup
        toast.current.show({
          severity: "success",
          summary: "تمت عملية التسجيل بنجاح",
          detail: "لقد قمت بالتسجيل في ميقافود بنجاح، يمكنك تسجيل الدخول الآن",
          life: 6000,
        });
        // Redirect or clear form if needed
        setName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");

      } else {
        // Failed signup
        toast.current.show({
          severity: "error",
          summary: "حدث خطأ أثناء عملية التسجيل",
          detail: "أعد محاولة التسجيل وتأكد من معلومتك جيدا",
          life: 5000,
        });
      }
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "حدث خطأ أثناء عملية التسجيل",
        detail: "أعد محاولة التسجيل وتأكد من معلومتك جيدا",
        life: 5000,
      });
    }
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
            <label htmlFor="name" style={{ marginBottom: 5, marginLeft: 310 }}>
              الإسم
            </label>
          </FloatLabel>

          <InputMask
            style={{ marginTop: "35px", paddingRight: 30 }}
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
            <label htmlFor="email" style={{ marginBottom: 5, marginLeft: 250 }}>
              البريد الإلكتروني
            </label>
          </FloatLabel>

          <FloatLabel style={{ marginTop: "35px" }}>
            <InputText
              id="address"
              type="text"
              value={adress}
              onChange={(e) => setAddress(e.target.value)}
              style={inputStyle}
            />
            <label htmlFor="address" style={{ marginBottom: 5, marginLeft: 310 }}>
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
            <label htmlFor="password" style={{ marginBottom: 5, marginLeft: 280 }}>
              كلمة المرور
            </label>
          </FloatLabel>

          <Button type="submit" label="التسجيل" style={buttonStyle} />
        </form>
      </div>
      <Footer />
      <Toast ref={toast} />
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

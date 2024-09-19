import React from "react";
import { useState, useRef } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { InputMask } from "primereact/inputmask";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from "primereact/toast";
import {verifyAction} from '../../../redux/verifyPassword/actions'


function VerifyPassword() {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const [resetCode, setResetCode] = useState(null);
  const { verifytData, verifytLoading, verifytError } = useSelector(
    (state) => state.verifyPassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
        
    try {
      const result = await dispatch(verifyAction({resetCode}));

      if (!verifyAction.fulfilled.match(result)) {
        console.log(result);
        
        toast.current.show({
          severity: "error",
          summary: "حدث خطأ",
          detail: "رمز التأكيد خاطئ",
          life: 6000,
        });
      } else if (verifyAction.fulfilled.match(result)) {
        localStorage.setItem('resetPasswordStatus', true)
        window.location.href = "/reset-password";
        console.log(result);
        
  
      }
    } catch (error) {
      console.log(error);
      toast.current.show({
        severity: "error",
        summary: "حدث خطأ",
        detail: "يرجى المحاولة لاحقا",
        life: 6000,
      });
      
    }

  };
  return (
    <div className="container">
      <Navbar />
      <div className="login-form" style={loginFormStyle}>
        <h3>أدخل رمز التأكيد</h3>
        <h6 style={{ marginBottom: 45, textAlign: "center" }}>
          قم بإدخال رمز التأكيد المكون من 6 أرقام الذي سيصلك في بريدك الإلكتروني
          <br></br> لإعادة تعيين كلمة السر{" "}
        </h6>
        <form onSubmit={handleSubmit} style={formStyle}>
          <InputMask
            style={{ marginTop: "35px", paddingRight: 30 }}
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
            mask="999999"
            placeholder="XXXXXX"
          />

          <Button
            type="submit"
            label="تأكيد"
            style={buttonStyle}
            disabled={false}
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

export default VerifyPassword;

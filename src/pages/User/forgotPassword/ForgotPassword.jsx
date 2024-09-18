import React from "react";
import { useState, useRef } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from "primereact/toast";
import {forgotAction} from '../../../redux/forgotPassword/actions'

function ForgotPassword() {
  const toast = useRef(null);
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  const { forgotData, forgotLoading, forgotError } = useSelector(
    (state) => state.forgotPassword
  );


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(forgotAction({email}));

      if (!forgotAction.fulfilled.match(result)) {
        console.log(result);
        
        toast.current.show({
          severity: "error",
          summary: "حدث خطأ",
          detail: "يرجى المحاولة لاحقا",
          life: 6000,
        });
      } else if (forgotAction.fulfilled.match(result)) {
  
        window.location.href = "/verify-code";
        console.log(result.payload);
        
  
      }
    } catch (error) {
      console.log(error);
      
    }


  };

  return (
    <div className="container">
      <Navbar />
      <div className="forgot-form" style={forgotFormStyle}>
        <h3>أدخل البريد الإلكتروني </h3>
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

          <Button
            type="submit"
            label="إرسال"
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

// Styles for the forgot form
const forgotFormStyle = {
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

export default ForgotPassword;

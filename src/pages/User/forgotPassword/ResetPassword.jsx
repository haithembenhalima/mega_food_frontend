import React from "react";
import { useState, useRef } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import NotFound from "../../../components/notFound/NotFound";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { Toast } from "primereact/toast";
import { resetAction } from "../../../redux/resetPassword/actions";

function ResetPassword() {
  const toast = useRef(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const dispatch = useDispatch();
  const { resetData, resetLoading, resetError } = useSelector(
    (state) => state.resetPassword
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resetData = {
      email,
      password,
    };
    try {
      const result = await dispatch(resetAction(resetData));

      if (!resetAction.fulfilled.match(result)) {
        console.log(result);

        toast.current.show({
          severity: "error",
          summary: "حدث خطأ",
          detail: "يرجى التحقق من البريد الإلكتروني",
          life: 6000,
        });
      } else if (resetAction.fulfilled.match(result)) {
        toast.current.show({
          severity: "success",
          summary: " تمت العميلة بنجاح",
          detail: "تم تغيير كبمة السر بنجاح",
          life: 6000,
        });
      }
    } catch (error) {
      console.log(error);
      toast.current.show({
        severity: "error",
        summary: "حدث خطأ",
        detail: "يرجى المحاولة",
        life: 6000,
      });
    }
  };

  return localStorage.getItem("resetPasswordStatus") ? (
    <div className="container">
      <Navbar />
      <div className="forgot-form" style={forgotFormStyle}>
        <h3>أدخل كلمة السر الجديدة</h3>
        <form onSubmit={handleSubmit} style={formStyle}>
          <FloatLabel style={{ marginTop: "35px" }}>
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
              style={{ marginBottom: 5, marginLeft: 250 }}
            >
              كلمة السر الجديدة
            </label>
          </FloatLabel>

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
  ) : (
    // if is not confirmed the reset password:  404 Not Found
    <div className="container">
      <NotFound />
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

export default ResetPassword;

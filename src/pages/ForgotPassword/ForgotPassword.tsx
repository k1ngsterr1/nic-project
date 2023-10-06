import React, { useState } from "react";
import Header from "../../components/Header/Header";
import app from "../../api/firebase/firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Footer from "../../components/Footer/Footer";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserCredential } from "firebase/auth";
import "firebase/compat/auth";

import "./styles/forgot_password.css";
import PopupWindow from "../../components/Popup/PopupWindow";

const email_icon = require("../../assets/email_icon.svg").default;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Wrong email address")
        .required("Email is required"),
      password: Yup.string().required("New password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await app.auth().sendPasswordResetEmail(values.email);
        setPopupOpen(true);
        setUserEmail(values.email);
      } catch (error: any) {
        console.error("Error sending password reset email:", error.message);
      }
    },
  });

  function emailChange(e: any) {
    formik.handleChange(e);
    setEmail(e.target.value);
  }

  function passwordChange(e: any) {
    formik.handleChange(e);
    setPassword(e.target.value);
  }

  function showPassword() {
    setPasswordShown(!isPasswordShown);
  }

  return (
    <div className="screen">
      <div className="container">
        <Header />
        <main className="main-content">
          <div className="heading-container">
            <h2 className="section-heading">
              <strong>Sign in</strong>
            </h2>
          </div>
          <div className="heading-container-second">
            <h3 className="password-heading">Forgot password</h3>
            <span className="password-description">
              Enter your email adress to reacquisition to your password.
            </span>
          </div>
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="email-input-container-l">
              <label htmlFor="email" className="label">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Adress"
                className={
                  formik.errors.email ? "email-input-error" : "email-input"
                }
                onChange={emailChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="password-input-container">
              <label htmlFor="password" className="label">
                New Password <span className="required">*</span>
              </label>
              <div className="password-show-container">
                <input
                  id="password"
                  name="password"
                  autoComplete="false"
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="Password"
                  className={
                    formik.errors.password
                      ? "password-input-error"
                      : "password-input"
                  }
                  onChange={passwordChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <span className="eye-btn" onClick={showPassword}>
                  <FontAwesomeIcon
                    className="eye-icon"
                    icon={isPasswordShown ? faEyeSlash : faEye}
                  ></FontAwesomeIcon>
                </span>
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <button
              className={
                email && password !== "" ? "form-button-active" : "form-button"
              }
              type="submit"
            >
              Reset Password
            </button>

            <div className="text-container">
              <span className="link-text">
                Don't have an account?{" "}
                <Link className="sign-up-link" to="/login">
                  <strong>Sign up</strong>
                </Link>
              </span>
            </div>
          </form>
        </main>
      </div>
      <PopupWindow
        vector={email_icon}
        paragraph="We have just sent you your new confirmation email to"
        email={userEmail}
        display={popupOpen}
      />
      <Footer />
    </div>
  );
};

export default ForgotPassword;

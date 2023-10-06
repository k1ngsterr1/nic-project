import React, { useState } from "react";
import Header from "../../components/Header/Header";
import app from "../../api/firebase/firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import {
  GoogleAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
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
import "firebase/compat/auth";

import "./styles/registration.css";
import PopupWindow from "../../components/Popup/PopupWindow";

const confetti = require("../../assets/confetti.svg").default;

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isPasswordShown, setPasswordShown] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const auth = getAuth(app);

  const signUpWithEmail = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        sendEmailVerification(user).then(() => {
          if (user.email) {
            setUserEmail(user.email);
            setPopupOpen(true);
          }
        });
      }
    } catch (error: any) {
      console.error("Error signing up with email and password:", error.message);
    }
  };

  const signUpWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) {
      console.error("Error signing up with Google:", error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      checkbox: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Wrong email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
      checkbox: Yup.boolean().oneOf([true], "Must accept terms and conditions"),
    }),
    onSubmit: async (values) => {
      signUpWithEmail();
    },
  });

  function nameChange(e: any) {
    formik.handleChange(e);
    setName(e.target.value);
  }

  function emailChange(e: any) {
    formik.handleChange(e);
    setEmail(e.target.value);
  }

  function passwordChange(e: any) {
    formik.handleChange(e);
    setPassword(e.target.value);
  }

  function checkboxChecked(e: any) {
    setChecked(true);
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
              <strong>Sign up</strong>
            </h2>
          </div>
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="name-input-container">
              <label htmlFor="name" className="label">
                Name <span className="required">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                className={
                  formik.errors.name ? "name-input-error" : "name-input"
                }
                onChange={nameChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="email-input-container">
              <label htmlFor="email" className="label">
                Email <span className="required">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="false"
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
              <label htmlFor="email" className="label">
                Password <span className="required">*</span>
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
            <div className="lower-container">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox"
                  onClick={checkboxChecked}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  checked={formik.values.checkbox}
                />
                <label
                  htmlFor="checkbox"
                  className={
                    formik.errors.name
                      ? "checkbox-label-error"
                      : "checkbox-label"
                  }
                >
                  Begin with an intro to acknowledge this is a terms and
                  conditions agreement.
                </label>
              </div>
            </div>
            <button
              className={
                email && password && name !== "" && checked !== false
                  ? "form-button-active"
                  : "form-button"
              }
              type="submit"
            >
              Sign Up
            </button>
            <div className="divider-container">
              <div className="divider"></div>
              <span className="text">OR</span>
              <div className="divider"></div>
            </div>
          </form>
          <button className="google-button" onClick={signUpWithGoogle}>
            <FontAwesomeIcon
              className="google-icon"
              icon={faGoogle}
            ></FontAwesomeIcon>
            Sign up by Google
          </button>
        </main>
      </div>
      <PopupWindow
        vector={confetti}
        paragraph="We have just sent you your new confirmation email to complete  your registration to "
        email={userEmail}
        display={popupOpen}
      />
      <Footer />
    </div>
  );
};

export default Registration;

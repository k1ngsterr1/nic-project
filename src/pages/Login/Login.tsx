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
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import "firebase/compat/auth";

import "./styles/login.css";

import PopupWindow from "../../components/Popup/PopupWindow";

const confetti = require("../../assets/confetti.svg").default;

const Login = () => {
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
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Wrong email address")
        .required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(values.email, values.password);
        console.log("Successful Login");
      } catch (error: any) {
        console.error("Error signing in:", error.message);
      }
    },
  });

  const formikRegistration = useFormik({
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

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await app.auth().signInWithPopup(provider);
    } catch (error: any) {
      console.error("Error signing in with Google:", error.message);
    }
  };

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

  function nameChangeRegistration(e: any) {
    formik.handleChange(e);
    setName(e.target.value);
  }

  function emailChangeRegistration(e: any) {
    formik.handleChange(e);
    setEmail(e.target.value);
  }

  function passwordChangeRegistration(e: any) {
    formik.handleChange(e);
    setPassword(e.target.value);
  }

  function checkboxCheckedRegistration(e: any) {
    setChecked(true);
  }

  return (
    <div className="screen">
      <Header />
      <div className="container">
        <main className="main-content">
          <div className="heading-container">
            <h2 className="section-heading">
              <strong>Sign in</strong>
            </h2>
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
            <div className="lower-container-l">
              <div className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="checkbox" className="checkbox-label">
                  Remember for 30 days
                </label>
              </div>
              <Link to="/forgot-password" className="password-link">
                Forgot password
              </Link>
            </div>

            <button
              className={
                email && password !== "" ? "form-button-active" : "form-button"
              }
              type="submit"
            >
              Sign In
            </button>
            <div className="divider-container">
              <div className="divider"></div>
              <span className="text">OR</span>
              <div className="divider"></div>
            </div>
            <button className="google-button">
              <FontAwesomeIcon
                className="google-icon"
                icon={faGoogle}
              ></FontAwesomeIcon>
              Sign in by Google
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
        <main className="tablet-content">
          <div className="back-heading">
            <span className="text">
              <FontAwesomeIcon
                className="chevron"
                icon={faChevronLeft}
              ></FontAwesomeIcon>
              Back to the website
            </span>
          </div>
          <div className="forms">
            <div className="sign-in-content">
              <span className="sign-in-heading">Sign in</span>
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
                <div className="lower-container-l">
                  <div className="checkbox-container">
                    <input type="checkbox" className="checkbox" />
                    <label htmlFor="checkbox" className="checkbox-label">
                      Remember for 30 days
                    </label>
                  </div>
                  <Link to="/forgot-password" className="password-link">
                    Forgot password
                  </Link>
                </div>

                <button
                  className={
                    email && password !== ""
                      ? "form-button-active"
                      : "form-button"
                  }
                  type="submit"
                >
                  Sign In
                </button>
                <div className="divider-container">
                  <div className="divider"></div>
                  <span className="text">OR</span>
                  <div className="divider"></div>
                </div>
                <button className="google-button">
                  <FontAwesomeIcon
                    className="google-icon"
                    icon={faGoogle}
                  ></FontAwesomeIcon>
                  Sign in by Google
                </button>
              </form>
            </div>
            <figure className="separator-line"></figure>
            <div className="sign-up-content">
              <span className="sign-in-heading">Sign up</span>
              <form onSubmit={formikRegistration.handleSubmit} className="form">
                <div className="email-input-container-l">
                  <label htmlFor="name" className="label">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Name"
                    className={
                      formikRegistration.errors.name
                        ? "email-input-error"
                        : "email-input"
                    }
                    onChange={nameChangeRegistration}
                    onBlur={formikRegistration.handleBlur}
                    value={formikRegistration.values.email}
                  />
                  {formikRegistration.errors.name &&
                  formikRegistration.touched.name ? (
                    <div className="error">
                      {formikRegistration.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="email-input-container-l-reg">
                  <label htmlFor="email" className="label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Adress"
                    className={
                      formikRegistration.errors.email
                        ? "email-input-error"
                        : "email-input"
                    }
                    onChange={emailChangeRegistration}
                    onBlur={formikRegistration.handleBlur}
                    value={formikRegistration.values.email}
                  />
                  {formikRegistration.errors.email &&
                  formikRegistration.touched.email ? (
                    <div className="error">
                      {formikRegistration.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="password-input-container">
                  <label htmlFor="password" className="label">
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
                        formikRegistration.errors.password
                          ? "password-input-error"
                          : "password-input"
                      }
                      onChange={passwordChange}
                      onBlur={formikRegistration.handleBlur}
                      value={formikRegistration.values.password}
                    />
                    <span className="eye-btn-my" onClick={showPassword}>
                      <FontAwesomeIcon
                        className="eye-icon"
                        icon={isPasswordShown ? faEyeSlash : faEye}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  {formikRegistration.errors.password &&
                  formikRegistration.touched.password ? (
                    <div className="error">
                      {formikRegistration.errors.password}
                    </div>
                  ) : null}
                </div>
                <div className="lower-container-l">
                  {" "}
                  <div className="checkbox-container">
                    <input type="checkbox" className="checkbox" />
                    <label htmlFor="checkbox" className="checkbox-label">
                      Terms and conditions should begin with a clear
                      introduction
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
                <button className="google-button">
                  <FontAwesomeIcon
                    className="google-icon"
                    icon={faGoogle}
                  ></FontAwesomeIcon>
                  Sign in by Google
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

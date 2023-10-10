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
import "firebase/compat/auth";

import "./styles/login.css";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setPasswordShown] = useState(false);

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
            <figure className="separator"></figure>
            <div className="sign-up-content">
              {" "}
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
                <div className="text-container">
                  <span className="link-text">
                    Don't have an account?{" "}
                    <Link className="sign-up-link" to="/login">
                      <strong>Sign up</strong>
                    </Link>
                  </span>
                </div>
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

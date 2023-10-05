import React, { useState } from "react";
import Header from "../../components/Header/Header";
import app from "../../api/firebase/firebase";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
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
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import "firebase/compat/auth";

import "./styles/registration.css";

const Registration = () => {
  const [fullForm, setFullForm] = useState(false);

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
      } catch (error: any) {
        console.error("Error signing in:", error.message);
      }
    },
  });

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
          <form onSubmit={formik.handleSubmit} className="form">
            <div className="email-input-container">
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
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="password-input-container">
              <label htmlFor="email" className="label">
                Password <span className="required">*</span>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className={
                  formik.errors.password
                    ? "password-input-error"
                    : "password-input"
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
            </div>
            <div className="lower-container">
              <div className="checkbox-container">
                <input type="checkbox" className="checkbox" />
                <label htmlFor="checkbox" className="checkbox-label">
                  Remember for 30 days
                </label>
              </div>
              <Link to="/password" className="password-link">
                Forgot password
              </Link>
            </div>
            <button className="form-button" type="submit">
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
                <Link className="sign-up-link" to="/Login">
                  <strong>Sign up</strong>
                </Link>
              </span>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;

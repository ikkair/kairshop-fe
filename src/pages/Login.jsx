import React from "react";
import mainLogo from "../assets/images/Main Logo.svg";
import { Link } from "react-router-dom";
import "../assets/css/auth.css";

function Login() {
  return (
    <>
      <div className="vh-100 d-flex align-items-center">
        <div className="container">
          {/* Logo Start */}
          <div className="row">
            <Link to="/">
              <div className="col d-flex justify-content-center align-items-center">
                <img src={mainLogo} alt="shopbag" />
                <h1 className="mt-3 ms-2 fnt-color metropolis-b fs-3">
                  Blanja
                </h1>
              </div>
            </Link>
          </div>
          {/* Logo End */}
          {/* Text Start */}
          <div className="row mt-3">
            <div className="col d-flex justify-content-center align-items-center">
              <p className="metropolis-b">Please login with your account</p>
            </div>
          </div>
          {/* Text End */}
          {/* Button Start */}
          <div className="row justify-content-center">
            <div
              className="col-2 nav nav-pills d-flex justify-content-center align-items-center"
              id="v-pills-tab"
              role="tablist"
            >
              <div className="btn-group w-100 d-flex justify-content-center align-items-center">
                <button
                  className="nav-link active rounded-end-0 rounded-start-1"
                  id="v-pills-customer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-customer"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-customer"
                  aria-selected="true"
                >
                  Customer
                </button>
                <button
                  className="nav-link rounded-end-1 rounded-start-0"
                  id="v-pills-seller-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-seller"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-seller"
                  aria-selected="false"
                >
                  Seller
                </button>
              </div>
            </div>
          </div>
          {/* Button End */}
          {/* Input Start */}
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-customer"
              role="tabpanel"
              aria-labelledby="v-pills-customer-tab"
              tabIndex={0}
            >
              <div className="row mt-4 my-3 justify-content-center">
                <div className="col-lg-4 ">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-seller"
              role="tabpanel"
              aria-labelledby="v-pills-seller-tab"
              tabIndex={0}
            >
              <div className="row mt-4 my-3 justify-content-center">
                <div className="col-lg-4 ">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-3 justify-content-center">
                <div className="col-lg-4">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Input End */}
          {/* F Password Start */}
          <div className="row my-3 justify-content-center">
            <div className="col-lg-4 d-flex justify-content-end">
              <Link to="#">Forgot password?</Link>
            </div>
          </div>
          {/* F Password End */}
          {/* Button Start */}
          <div className="row mb-4 justify-content-center">
            <div className="col-lg-4 d-flex justify-content-center">
              <button className="btn btn-primary rounded-pill w-100">
                Primary
              </button>
            </div>
          </div>
          {/* Button End */}
          {/* Register Start */}
          <div className="row">
            <div className="col d-flex justify-content-center">
              <p>
                Don't have an account?{" "}
                <Link to="/register">
                  <span>Register</span>
                </Link>
              </p>
            </div>
          </div>
          {/* Register End */}
        </div>
      </div>
    </>
  );
}

export default Login;

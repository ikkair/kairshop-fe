import React from "react";
import "../assets/css/mybag.css";
import product1 from "../assets/images/Product V1-1.png";
import product5 from "../assets/images/Product V1-5.png";
import { Link } from "react-router-dom";

function MyBag() {
  return (
    <>
      <section className="container pt-5 mt-5">
        <div className="row mt-3">
          <h1 className="metropolis-b text-dark">My Bag</h1>
        </div>
        <div className="row">
          <div className="col-lg-8 d-flex flex-column">
            <div className="card shadow-sm mb-3">
              <div className="card-body d-flex align-items-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" htmlFor="defaultCheck1">
                    <b>Select All Items</b>
                    <span className="text-secondary">(2 Items selected)</span>
                  </label>
                </div>
                <Link href="#" className="text-danger ms-auto">
                  <b>Delete</b>
                </Link>
              </div>
            </div>
            <div className="card shadow-sm mb-2">
              <div className="d-flex align-items-center">
                <input
                  className="form-check-input ms-3"
                  type="checkbox"
                  defaultValue=""
                  id="defaultCheck1"
                />
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={product1}
                      className="rounded-4 me-2"
                      alt=""
                      width="103px"
                    />
                    <div>
                      <b>Men's formal suit - Black</b>
                      <span className="d-block text-secondary">
                        Zalora Cloth
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <button className="rounded-circle btn-min text-light fs-1">
                      -
                    </button>
                    <span className="fs-5">1</span>
                    <button className="rounded-circle btn-min text-light fs-3">
                      +
                    </button>
                  </div>
                  <span className="fs-5">
                    <b>$ 20.0</b>
                  </span>
                </div>
              </div>
            </div>
            <div className="card shadow-sm mb-2">
              <div className="d-flex align-items-center">
                <input
                  className="form-check-input ms-3"
                  type="checkbox"
                  defaultValue=""
                  id="defaultCheck1"
                />
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img
                      src={product5}
                      className="rounded-4 me-2"
                      alt=""
                      width="103px"
                    />
                    <div>
                      <b>Men's Jacket Jeans New</b>
                      <span className="d-block text-secondary">
                        Zalora Cloth
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between gap-2">
                    <button className="rounded-circle btn-min text-light fs-1">
                      -
                    </button>
                    <span className="fs-5">1</span>
                    <button className="rounded-circle btn-min text-light fs-3">
                      +
                    </button>
                  </div>
                  <span className="fs-5">
                    <b>$ 20.0</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body d-flex flex-column ">
                <b className="fs-5 metropolis-b">Shopping Summary</b>
                <div className="d-flex justify-content-between mb-3">
                  <span className="fs-5 text-secondary">Total Price</span>
                  <span className="text-danger metropolis-b fs-4">$ 40.0</span>
                </div>
                <button className="btn btn-primary rounded-pill w-100">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyBag;

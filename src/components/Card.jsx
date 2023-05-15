import React from "react";
import iconStar from "../assets/images/Icon Star.svg";
import { Link } from "react-router-dom";

function Card({ cardData }) {
  return (
    <>
      <div className="row g-4">
        {cardData.map((data, index) => {
          return (
            <div key={index.toString()} className="col-lg-3 col-md-4 col-sm-6">
              <Link to={"product/" + data.id} key={index.toString()}>
                <div className="card h-100">
                  <img
                    crossOrigin="anonymous"
                    src={data.cardImage}
                    className="card-img-top"
                    alt="cardImage"
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h4 className="card-title text-dark">{data.cardTitle}</h4>
                    <div>
                      <h5 className="text-danger metropolis-b">{`$ ${data.cardPrice}`}</h5>
                      <span className="card-text text-secondary text-break">
                        {data.cardStore}
                      </span>
                      <br />
                      <div>
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <img src={iconStar} alt="Star" />
                        <span className="text-secondary">(10)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Card;

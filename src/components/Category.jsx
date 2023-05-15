import React from "react";
// import categoryImg1 from "../assets/images/Category T-Shirt.png";
// import categoryImg2 from "../assets/images/Category Shorts.png";
// import categoryImg3 from "../assets/images/Category Jacket.png";
// import categoryImg4 from "../assets/images/Category Pants.png";
// import categoryImg5 from "../assets/images/Category Shoes.png";
// import categoryImg6 from "../assets/images/Category Glasses.png";
import "../assets/css/style.css";
// const categoryData = [
//   {
//     categoryName: "T-Shirt",
//     categoryImg: categoryImg1,
//     categoryColor: "#CC0B04",
//   },

//   {
//     categoryName: "Shorts",
//     categoryImg: categoryImg2,
//     categoryColor: "#1c3391",
//   },

//   {
//     categoryName: "Jacket",
//     categoryImg: categoryImg3,
//     categoryColor: "#f67b02",
//   },

//   {
//     categoryName: "Pants",
//     categoryImg: categoryImg4,
//     categoryColor: "#e31f51",
//   },
//   {
//     categoryName: "Shoes",
//     categoryImg: categoryImg5,
//     categoryColor: "#57cd9e",
//   },

//   {
//     categoryName: "Glasses",
//     categoryImg: categoryImg6,
//     categoryColor: "#5086d8",
//   },
// ];

function Category({ categoryData }) {
  return (
    <>
      <div className="row g-3">
        {categoryData.map((data, index) => {
          return (
            <div key={index.toString()} className="col-lg-3 col-xxl-2 col-6">
              <div
                className="d-flex justify-content-center align-items-center category rounded-3"
                style={{ backgroundColor: `${data.categoryColor}` }}
              >
                <img src={data.categoryImg} alt="" />
                <span className="position-absolute">{data.categoryName}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;

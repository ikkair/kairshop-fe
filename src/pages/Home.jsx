import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Category from "../components/Category";
import Carousel from "../components/Carousel";
import categoryImg1 from "../assets/images/Category T-Shirt.png";
import categoryImg2 from "../assets/images/Category Shorts.png";
import categoryImg3 from "../assets/images/Category Jacket.png";
import categoryImg4 from "../assets/images/Category Pants.png";
import categoryImg5 from "../assets/images/Category Shoes.png";
import categoryImg6 from "../assets/images/Category Glasses.png";
import Carousel1 from "../assets/images/Carrousel 1.png";
import Carousel2 from "../assets/images/Carrousel 2.png";
import "../assets/css/style.css";

import cardImage from "../assets/images/Product Dummy.png";
const cardData1 = [
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 1,
  },
  {
    cardImage: cardImage,
    cardTitle: "Ikkair",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 2,
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 3,
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 4,
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 5,
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 6,
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 7,
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
    id: 8,
  },
];
const cardData2 = [
  {
    cardImage: cardImage,
    cardTitle: "Boy's suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Baju Formal Ikkair",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
  {
    cardImage: cardImage,
    cardTitle: "Men's formal suit - Black - White",
    cardPrice: 40.0,
    cardStore: "Zalora Cloth",
  },
];

const categoryData = [
  {
    categoryName: "T-Shirt",
    categoryImg: categoryImg1,
    categoryColor: "#CC0B04",
  },

  {
    categoryName: "Shorts",
    categoryImg: categoryImg2,
    categoryColor: "#1c3391",
  },

  {
    categoryName: "Jacket",
    categoryImg: categoryImg3,
    categoryColor: "#f67b02",
  },

  {
    categoryName: "Pants",
    categoryImg: categoryImg4,
    categoryColor: "#e31f51",
  },
  {
    categoryName: "Shoes",
    categoryImg: categoryImg5,
    categoryColor: "#57cd9e",
  },

  {
    categoryName: "Glasses",
    categoryImg: categoryImg6,
    categoryColor: "#5086d8",
  },
];

const dataCarousel = [
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel1,
  },
  {
    carouselImg: Carousel2,
  },
];

function Home() {
  let [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/products").then((result) => {
      let cardTemp = result.data.data.map((element) => {
        return {
          cardTitle: element.product_name,
          cardPrice: element.product_price,
          cardImage: element.product_photo,
        };
      });
      setCardData(cardTemp);
      console.log(cardTemp);
      console.log(cardData);
    });
  }, []);

  return (
    <>
      <main className="container pt-5 mt-5">
        <section className="row justify-content-center align-items-center mt-4">
          <div className="col-lg-8">
            <Carousel dataCarousel={dataCarousel} />
          </div>
        </section>
        <section className="mt-5">
          <h2>Category</h2>
          <span>What are you looking for</span>
          <Category categoryData={categoryData} />
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">New</h2>
          <span>You've never seen it before</span>
          <Card cardData={cardData1} />
        </section>
        <section className="mt-5">
          <h2 className="metropolis-b">Popular</h2>
          <span>Find clothes that are trending recently</span>
          <div className="row g-4 align-items-center">
            <Card cardData={cardData2} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

import React from "react";
import "./card.css";

const productApi = [
  {
    id: 1,
    title: "Samsung",
    img: "https://htstatic.imgsmail.ru/pic_image/f1234232024497351070fd4d738fbc07/840/589/2308165/",
  },
  {
    id: 2,
    title: "Redmi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd-XMiV8B04ql-fYCFUTRHzKIk9KE9JEFXFQ&usqp=CAU",
  },
  {
    id: 3,
    title: "Noutbook",
    img: "https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?resize=625%2C417&p=1",
  },
  {
    id: 4,
    title: "Noutbook",
    img: "https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?resize=625%2C417&p=1",
  },
];

function Card() {
  return (
    <>
      <div class="product-grid">
        {productApi.map((el) => (
          <div class="showcase" key={el.id}>
            <div class="showcase-banner">
              <img
                src={el.img}
                width="300"
                class="showcase-img default"
                alt="#"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlLy29axaIwVLioGDeubiE7UEEoD1zsL60jw&usqp=CAU"
                width="300"
                class="showcase-img hover"
                alt="#"
              />
              <div class="showcase-actions">
                <button class="btn-action">
                  <i class="bi bi-emoji-heart-eyes"></i>
                </button>
                <button class="btn-action">
                  <i class="bi bi-eye"></i>
                </button>
                <button class="btn-action">
                  <i class="bi bi-bag-plus"></i>
                </button>
              </div>
            </div>
            <div class="showcase-content">
              <a href="#" class="showcase-category">
                {el.title}
              </a>
              <a href="#" class="showcase-title">
                <h3>Mens winter leathers jackets</h3>
              </a>
              <div class="showcase-raiting">
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
                <i class="bi bi-star"></i>
              </div>
              <div class="price-box">
                <p class="price">$48.00</p>
                <del>$75.00</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;

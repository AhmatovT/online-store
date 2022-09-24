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
];

function Card() {
  return (
    <>
      {productApi.map((el) => (
        <div className="row">
          <div className="cards">
            <div className="card-img">
              <img src={el.img} alt="" />
            </div>
            <div className="card-content">
              <h3 className="card-title">{el.title}</h3>
              <p className="card-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Magnam, vitae?
              </p>
              <p className="card-price">1000$</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;

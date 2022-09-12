import React from "react";
import "./Review.scss";

export default function Review(props) {
  const { data } = props;

  return (
    <div className="product-review">
      <div className="product-review-user">
        <div className="product-review-avatar">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX110_.png"
            alt=""
          />
        </div>

        <span className="product-review-fullname">{data.name}</span>
      </div>

      <div className="product-raiting mb-10">
        <i className="product-raiting-stars"></i>
        <p className="product-review-verified">Compra verificada</p>
      </div>

      <span className="product-review-short">{data.short}</span>
      <small>Revisado en México el {data.date}</small>
      <p className="product-review-long">{data.long}</p>

      <div className="product-review-actions">
        <button className="product-review-actions-btn">Me gusta</button>
        <span className="product-review-actions-report">Informar</span>
      </div>
    </div>
  );
}

import React from "react";
import "./Review.scss";

export default function Review() {
  return (
    <div className="product-review">
      <div className="product-review-user">
        <div className="product-review-avatar">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX110_.png"
            alt=""
          />
        </div>

        <span className="product-review-fullname">Martha A. Tamez</span>
      </div>

      <div className="product-raiting mb-10">
        <i className="product-raiting-stars"></i>
        <p className="product-review-verified">Compra verificada</p>
      </div>

      <span className="product-review-short">Hermoso color</span>
      <small>Revisado en México el 26 de enero de 2022</small>
      <p className="product-review-long">
        Me quedo muy bien. El color es fabuloso. Me hubiera gustado que el cinto
        viniera cocido, ya que se movia un poco al caminar y lo tenia que estar
        acomodando constantemente
      </p>

      <div className="product-review-actions">
        <button className="product-review-actions-btn">Me gusta</button>
        <span className="product-review-actions-report">Informar</span>
      </div>
    </div>
  );
}

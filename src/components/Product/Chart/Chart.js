import React from "react";
import Camiseta from "../../../assets/img/camiseta.png";
import Laugh from "../../../assets/img/laugh.png";
import Color from "../../../assets/img/color.png";
import Star from "../../../assets/img/star.png";
import "./Chart.scss";

export default function Chart(props) {
  const { data } = props;

  const icons = {
    great: { Color },
    price: { Laugh },
    value: { Camiseta },
    range: { Star },
  };

  const getIcon = (value) => {
    return Object.values(icons[value]);
  };

  const getPercent = (value) => {
    return Math.floor(value * 100);
  };

  const getChart = (value) => {
    return Math.floor(value * 60);
  };

  const getUppercase = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="chart-container">
      <div className="chart-pie"></div>
      <div
        className="chart-pie chart-pie-green"
        style={{ "--p": getChart(data.score) }}></div>
      <span className="chart-info">
        <span className="chart-icon">
          <img src={getIcon(data.word)} alt="" />
        </span>
        <span className="chart-quantity">{getPercent(data.score) + "%"}</span>
        <span className="chart-category">{getUppercase(data.word)}</span>
      </span>
      <div className="chart-range">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

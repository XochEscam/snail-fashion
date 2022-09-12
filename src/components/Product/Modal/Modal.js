import React, { useState, useEffect } from "react";
import Close from "../../../assets/img/cerrar.png";
import ChartImg from "../../../assets/img/chart.png";
import Chart from "../Chart/Chart";
import axios from "axios";

export default function Modal(props) {
  const { open, setOpen, assignClass } = props;
  const [results, setResults] = useState();

  const fetchApi = async () => {
    axios({
      method: "GET",
      url: "https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",
      headers: {
        "X-RapidAPI-Key": "5694a00b4dmsh8d76a4ca3794915p1e10afjsnb9ecba888ae9",
        "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
      },
      params: {
        text: "great value in its price range!",
      },
    })
      .then((response) => {
        setResults(response.data.keywords);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div
      className={
        "snail-modal " +
        (assignClass() ? "snail-modal-show" : "snail-modal-hidden")
      }>
      <span
        className="snail-modal-close"
        onClick={() => {
          setOpen(!open);
        }}>
        <img src={Close} alt="" />
      </span>

      <div className="snail-modal-container">
        <p className="snail-modal-title">ANÁLISIS DEL PRODUCTO</p>

        <div className="snail-modal-graphics">
          {!results
            ? "Cargando..."
            : Object.values(results).map((category, index) => {
                return <Chart data={category} key={index} />;
              })}

          <p className="snail-modal-title">ANÁLISIS MENSUAL</p>
          <div className="snail-modal-chart">
            <img src={ChartImg} alt="" />
          </div>
        </div>
      </div>
      <div className="snail-modal-footer">
        <span>SNAIL FASHION</span>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Product.scss";
import Review from "./Review/Review";
import Modal from "./Modal/Modal";
import Logo from "../../assets/img/logo.png";

export default function Product() {
  const [open, setOpen] = useState(false);

  const assignClass = () => {
    const body = document.querySelector("body");
    body.style.overflow = open ? "hidden" : "scroll";

    return open ? true : false;
  };

  const comments = {
    0: {
      id: 1,
      name: "Cliente de Amazon",
      short: "Excelente vestido",
      long: "Recomendado ampliamente, excelente calidad, horma perfectamente la talla es justo lo que pedí.",
      date: "13 de junio de 2022",
    },
    1: {
      id: 2,
      name: "Alejandra",
      short: "Calidad regular, conforme al precio.",
      long: "Pidan su talla habitual, pedí una G y me quedó grande, por seguir la tabla de medidas. No se arruga y no se transparenta, llegó en buen estado, la tela es un poco elástica y algo gruesa, no tiene forro. Se lo regalé a una persona de 78 años, muy bajita y se le veía genial.",
      date: "21 de febrero de 2022",
    },
    2: {
      id: 3,
      name: "	LORENA SILVA MARTINEZ",
      short: "Corriente",
      long: "Producto terriblemente corriente.. ni le alcanzo a la empresa poner etiqueta de identificación.. me enviaron talla XS… la cual no siqiera estaba entre las tallas que da a opción de entrega… no tiene nada que ver con las recomendaciones",
      date: "24 de julio de 2022",
    },
  };

  return (
    <div>
      <div className="container">
        <a>Marca: Verdusa</a>
        <h1 className="mb-10">
          Verdusa Elegante vestido corto plisado de manga corta con cinturón de
          cintura alta para mujer
        </h1>
        <div className="d-flex">
          <div className="product-raiting">
            <i className="product-raiting-stars"></i>
            <a href="">
              <span>(352)</span>
            </a>
          </div>

          <button
            className="product-analize-btn"
            type="button"
            onClick={() => {
              setOpen(!open);
            }}>
            <img src={Logo} alt="" />
            Analizar
          </button>
        </div>
      </div>

      <div className="product">
        <img
          className="product-img"
          src="https://m.media-amazon.com/images/I/41f70OiiYOL._AC_SY580_.jpg"
          alt="Verdusa Elegante vestido corto plisado de manga corta con cinturón de
          cintura alta para mujer"
        />
        <span className="product-share"></span>
      </div>
      <ul className="product-options">
        <li className="product-options-li product-options-li-active"></li>
        <li className="product-options-li"></li>
        <li className="product-options-li"></li>
        <li className="product-options-li"></li>
        <li className="product-options-li"></li>
      </ul>

      <div className="divider"></div>

      <div className="container">
        <p>
          <span>Precio: </span>
          <span className="product-price">$629.61 - $884.73</span>
        </p>

        <button className="product-addcart">Agregar al Carrito</button>

        <a href="" className="product-addwishlist">
          AGREGAR A LA WISH LIST
        </a>
      </div>

      <div className="divider"></div>

      <div className="container">
        <h3>Detalles del producto</h3>

        <dl className="product-details">
          <dt className="product-details-title">Tipo de tejido</dt>
          <dd className="product-details-info">100% poliéster</dd>

          <dt className="product-details-title">Tipo de cierre</dt>
          <dd className="product-details-info">Pull on</dd>

          <dt className="product-details-title">Estilo de cuello</dt>
          <dd className="product-details-info">Cuello de barco</dd>

          <dt className="product-details-title">Tipo de manga</dt>
          <dd className="product-details-info">Manga corta</dd>
        </dl>

        <h3> Acerca de este artículo </h3>

        <ul className="product-details-descriptions">
          <li>Tela suave ligeramente elástica</li>
          <li>
            Cuello redondo, manga corta, dobladillo plisado, cinturón, vestido
            de fiesta de cintura alta
          </li>
          <li>
            Adecuado para citas, al aire libre, fin de semana, fiesta, calle,
            cóctel, graduación y uso diario
          </li>
        </ul>
      </div>

      <div className="divider"></div>

      <div className="container">
        <h2>Reseñas de clientes</h2>
        <div className="product-raiting mb-10">
          <i className="product-raiting-stars"></i>
          <p>4.8 de 5</p>
        </div>
        <p>
          <span>352</span> calificaciones globales
        </p>
        <hr />
        <h3>
          <b>Las mejores reseñas de México</b>
        </h3>

        {Object.values(comments).map((comment, index) => {
          return <Review data={comment} key={index} />;
        })}
      </div>

      <Modal open={open} setOpen={setOpen} assignClass={assignClass} />
    </div>
  );
}

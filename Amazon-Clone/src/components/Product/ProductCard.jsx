import React, { useContext } from "react";
import style from "./Product.module.css";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utils/action.type";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, title, id, rating, price, description } = product;
  const [state, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_CART,
      item: { image, title, id, rating, price, description },
    });
  };

  return (
    <div
      className={`${style.card__container}  ${
        flex ? style.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <section className={style.imgBox}>
          <img src={image} alt={title} />
        </section>
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{}}>{description}</div>}
        <div className={style.rating}>
          <Rating value={rating?.rate} precision={0.1} readOnly />
          <small>{rating?.count}</small>
        </div>

        <div>
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && <button onClick={addToCart}>Add to cart</button>}
      </div>
    </div>
  );
}

export default ProductCard;

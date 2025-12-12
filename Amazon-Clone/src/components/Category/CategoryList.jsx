import React from 'react'
import style from "./Category.module.css";
import { Link } from 'react-router-dom';


function CategoryList({ data }) {
  return (
    <div className={style.category}>
      <Link to={`/category/${data.name}`}>
        <h2>{data.title}</h2>
        <div className={style.category__imgBox}>
          <img src={data.imageLink} alt={data.name} />
        </div>
        <p>Shop now</p>
      </Link>
    </div>
  );
}

export default CategoryList
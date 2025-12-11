import React from 'react'
import style from "./Category.module.css";


function CategoryList({ data }) {
  return (
    <div className={style.category}>
      <a href="">
        <h2>{data?.name}</h2>
        <div className={style.category__imgBox}>
          <img src={data?.imageLink} alt={data?.title} />
        </div>
        <p>Shop now</p>
      </a>
    </div>
  );
}

export default CategoryList
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductUrl } from "../../Api/EndPoints";
import { useParams } from "react-router-dom";
import style from "./Result.module.css";
import ProductCard from "../../components/Product/ProductCard";

function Result() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(
          `${ProductUrl}/products/category/${categoryName}`
        );
        setResults(res.data);
    
      } catch (error) {
        console.log('Error'+ error);
      }
    };
    fetchResult();
  }, [categoryName]);

  return (
    <section>
      <h1 style={{ padding: "1rem" }}>Results</h1>
      <p style={{ padding: "1rem" }}>Category/{categoryName}</p> <hr />
      <div className={style.products__container}>
        {results?.map((result, index) => {
          return <ProductCard product={result} key={index} />;
        })}
      </div>
    </section>
  );
}

export default Result;

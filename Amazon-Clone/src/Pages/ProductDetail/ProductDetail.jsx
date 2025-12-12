import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductUrl } from "../../Api/EndPoints";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${ProductUrl}/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.log("Error" + error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <div style={{padding: '3rem 29rem'}}>
     { product && <ProductCard product={product} />}
    </div>
  );
}

export default ProductDetail;

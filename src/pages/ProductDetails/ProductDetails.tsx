import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSpecificProduct } from "../../api/productsAPI/productsAPI";

const ProductDetails = () => {
  const { productName } = useParams<{ productName: any }>();
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await fetchSpecificProduct(productName);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productName]);

  return <div className="screen">{productName}</div>;
};

export default ProductDetails;

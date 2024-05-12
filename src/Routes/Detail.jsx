import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DoctorCard from "../Components/Common/DoctorCard";
import { getDoctorById } from "../Services";

const Detail = () => {
  const { id } = useParams();
  const [DoctorCard, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      let productData = await getDoctorById(id);
      setProduct(productData);
    };

    fetchProduct();
  }, [id]);

  if (!DoctorCard) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <h1>{DoctorCard.name}</h1>

      <img src={DoctorCard.image} alt={DoctorCard.name} />

      <p>{DoctorCard.name}</p>

      <p>{DoctorCard.apellido}</p>

      <p>{DoctorCard.rut}</p>

      <button>Add to cart</button>
    </div>
  );
};

export default Detail;

// write product card here
import React from 'react';
import Button from "../components/button";
import "../index.css"; 

const ProductCard = () => {
    const productImage="./src/assets/anarkali.jpeg";
    const productName="Anarkali";
    const productPrice="Rs 999";

    return (
        <div className="product-card">
            <img id='image' src={productImage} alt="product" />
            <h2>{productName}</h2>
            <p>{productPrice}</p>
            <Button />
         
        </div>
    );
}
export default ProductCard ;
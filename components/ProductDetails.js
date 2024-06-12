import { useState } from 'react';
import BackToProductButton from '../pages/BackToProductButton';
import ProductInfo from '../pages/ProductInfo';
import ProductForm from './ProductForm';

function ProductDetails({ productData }) {
  const { attributes } = productData;
  const { title, description, price, image } = attributes;
  const mainImg = image.data[0].attributes;
  const mainImgUrl = `http://127.0.0.1:1337${mainImg.url}`;

  return (
    <div className="flex flex-col justify-between h-full w-full md:w-1/2 max-w-xs mx-auto space-y-4 min-h-128">
      <BackToProductButton />
      <ProductInfo 
        title={title}
        description={description}
        price={price}
      />
      <ProductForm 
        title={title}
        mainImg={{ url: mainImgUrl, altText: mainImg.alternativeText || title }}
      />
    </div>
  );
}

export default ProductDetails;
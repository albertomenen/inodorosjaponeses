import React from 'react';


const ProductForm = ({ product }) => {
  // Ensure variants is defined and is an array
  const variants = product?.attributes?.variants || [];

  return (
    <div>
      <h1>{product.attributes.title}</h1>
      <p>{product.attributes.description}</p>
      <p>Price: ${product.attributes.price}</p>
      {variants.length > 0 ? (
        <div>
          <h2>Variants</h2>
          <ul>
            {variants.map((variant, index) => (
              <li key={index}>{variant.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No variants available</p>
      )}
    </div>
  );
};

export default ProductForm;
import React from 'react';
import ProductForm from './ProductForm';
import { getProductBySlug } from '../utils/api';

const ProductDetails = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductForm product={product} />;
};

export async function getStaticPaths() {
  const paths = await getAllProductSlugs();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProductBySlug(params.slug);
  return {
    props: {
      product: product || null,
    },
  };
}

export default ProductDetails;

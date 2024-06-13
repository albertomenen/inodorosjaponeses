// pages/products/[slug].js

import { getProductSlugs, getProduct } from '../../lib/strapi';
import ProductSection from '../../components/ProductSection';

function ProductPage({ productData }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  );
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs();

  const paths = productSlugs.map((slug) => {
    return {
      params: { slug: slug.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productData = await getProduct(params.slug);

  if (!productData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      productData,
    },
  };
}

export default ProductPage;
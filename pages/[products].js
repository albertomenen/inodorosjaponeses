import { getProductSlugs, getProduct } from '../lib/strapi';
import ProductSection from '../components/ProductSection';

function ProductPage({ productData }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  );
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs();
  console.log('Product Slugs:', productSlugs); // Añade esta línea para depuración

  const paths = productSlugs.map((slug) => {
    return {
      params: { products: slug.slug }, // Asegúrate de que este campo coincide con `params.products` en `getStaticProps`
    };
  });

  console.log('Paths:', paths); // Añade esta línea para depuración

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('Params:', params); // Añade esta línea para depuración
  const productData = await getProduct(params.products);

  return {
    props: {
      productData,
    },
  };
}

export default ProductPage;
import { getProductSlugs, getProduct } from './strapi'
import ProductSection from './ProductSection'

function ProductPage({ productData }) {  
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductSection productData={productData} />
    </div>
  )
}

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()
  console.log('Product Slugs:', productSlugs); // Añade este log para verificar la estructura

  const paths = productSlugs.map((slug) => ({
    params: { products: slug.slug }, // Asegúrate de que `slug` se pasa correctamente
  }));

  console.log('Paths:', paths); // Añade este log para verificar los paths

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log('Params:', params); 
  const productData = await getProduct(params.product)  

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage
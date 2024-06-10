import axios from 'axios';

const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function getAllProducts() {
  try {
    const response = await axios.get(`${strapiUrl}/api/products`);
    console.log('Response from Strapi:', response.data); // Verifica la estructura de la respuesta
    return response.data.data; // Asegúrate de devolver la propiedad correcta
  } catch (error) {
    console.error('Error fetching products:', error);
    return []
  }
}

export async function getProductSlugs() {
  try {
    const response = await axios.get(`${strapiUrl}/api/products`);
    return response.data.data.map(product => ({ slug: product.attributes.slug }));
  } catch (error) {
    console.error('Error fetching product slugs:', error);
    return [];
  }
}

export async function getProduct(slug) {
  try {
    const response = await axios.get(`${strapiUrl}/api/products`, {
      params: { filters: { slug: slug } }
    });
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
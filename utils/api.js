// utils/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:1337/api/products';

export async function getAllProductSlugs() {
  const response = await axios.get(API_URL, {
    params: {
      populate: '*',
    },
  });

  return response.data.data.map((product) => ({
    params: {
      slug: product.attributes.slug,
    },
  }));
}

export async function getProductBySlug(slug) {
    try {
      const response = await axios.get(API_URL, {
        params: {
          filters: { slug: { $eq: slug } },
          populate: '*',
        },
      });
      console.log('Product data from API:', response.data);
      return response.data.data[0];
    } catch (error) {
      console.error('Error fetching product:', error);
      return null;
    }
  }
